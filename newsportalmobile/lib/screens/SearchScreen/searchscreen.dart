import 'package:flutter/material.dart';
import 'package:newsportalmobile/config/urls.dart';
import 'package:newsportalmobile/function/httprequest.dart';
import 'package:newsportalmobile/screens/SearchScreen/newscard.dart';
import 'package:newsportalmobile/screens/SearchScreen/searchbar.dart';
import 'package:newsportalmobile/widgets/loader.dart';
import 'package:newsportalmobile/widgets/text.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;
  List news = [];
  initializer() async {
    var data = await httpGet(newsUrl);
    print('run');
    setState(() {
      news = data;
    });
  }

  @override
  void initState() {
    _tabController = TabController(length: 2, vsync: this);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
        future: initializer(),
        builder: (context, snapshot) {
          return news.isEmpty
              ? loader()
              : Container(
                  padding: const EdgeInsets.all(8),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      boldtext('Discover', size: 24),
                      normalText('Top News from all around world', size: 11),
                      searchbar(),
                      TabBar(
                        indicatorColor: Theme.of(context).colorScheme.primary,
                        unselectedLabelColor:
                            Theme.of(context).colorScheme.secondary,
                        labelColor: Theme.of(context).colorScheme.primary,
                        tabs: const [
                          Tab(
                            text: 'Sports',
                          ),
                          Tab(
                            text: 'Politics',
                          )
                        ],
                        controller: _tabController,
                        indicatorSize: TabBarIndicatorSize.tab,
                      ),
                      Expanded(
                        child: TabBarView(
                          controller: _tabController,
                          children: [
                            SearchScreenNewsCard(news),
                            SearchScreenNewsCard(news),
                          ],
                        ),
                      ),
                    ],
                  ),
                );
        });
  }
}
