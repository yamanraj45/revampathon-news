import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/screens/HomeScreen/breakingnews.dart';
import 'package:newsportalmobile/screens/HomeScreen/hotnews.dart';
import 'package:newsportalmobile/screens/HomeScreen/top_card.dart';
import 'package:newsportalmobile/widgets/gappingbox.dart';
import 'package:newsportalmobile/widgets/text.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        child: Column(
          children: [
            topCard(context),
            Container(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  gapbox(),
                  breakingNews(context),
                  gapbox(size: 20),
                  hotNews(context),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
