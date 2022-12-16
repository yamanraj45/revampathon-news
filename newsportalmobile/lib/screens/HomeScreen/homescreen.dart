import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:newsportalmobile/config/urls.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/function/httprequest.dart';
import 'package:newsportalmobile/screens/HomeScreen/breakingnews.dart';
import 'package:newsportalmobile/screens/HomeScreen/categorychips.dart';
import 'package:newsportalmobile/screens/HomeScreen/hotnews.dart';
import 'package:newsportalmobile/screens/HomeScreen/top_card.dart';
import 'package:newsportalmobile/widgets/gappingbox.dart';
import 'package:newsportalmobile/widgets/loader.dart';
import 'package:newsportalmobile/widgets/text.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List news = [];
  initializer() async {
    var data = await httpGet(newsUrl);
    print('run');
    setState(() {
      news = data;
    });
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: FutureBuilder(
          future: initializer(),
          builder: (context, snapshot) {
            return news.isEmpty
                ? loader()
                : SingleChildScrollView(
                    child: Column(
                      children: [
                        topCard(context, news),
                        Container(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              gapbox(),
                              breakingNews(context, news),
                              gapbox(size: 20),
                              CategoryChips(),
                              gapbox(size: 20),
                              hotNews(context, news),
                            ],
                          ),
                        )
                      ],
                    ),
                  );
          }),
    );
  }
}
