import 'package:appbar_animated/appbar_animated.dart';
import 'package:flutter/material.dart';

import 'package:newsportalmobile/screens/Article/adcertisementspace.dart';
import 'package:newsportalmobile/screens/Article/articletextsection.dart';
import 'package:newsportalmobile/screens/Article/widgets/chips.dart';

class ArticleScreen extends StatefulWidget {
  String title;
  String body;
  String imagePath;
  ArticleScreen(this.title, this.imagePath, this.body, {super.key});

  @override
  State<ArticleScreen> createState() => _ArticleScreenState();
}

class _ArticleScreenState extends State<ArticleScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ScaffoldLayoutBuilder(
        backgroundColorAppBar:
            const ColorBuilder(Colors.transparent, Colors.blue),
        textColorAppBar: const ColorBuilder(Colors.white),
        appBarBuilder: _appBar,
        child: SafeArea(
          child: SingleChildScrollView(
            child: Stack(
              children: [
                Stack(
                  children: [
                    Image.network(
                      widget.imagePath,
                      width: MediaQuery.of(context).size.width,
                      height: MediaQuery.of(context).size.height * 0.4,
                      fit: BoxFit.cover,
                    ),
                    Positioned(
                      left: 10,
                      bottom: 40,
                      child: Text(
                        widget.title,
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ],
                ),
                Container(
                  margin: EdgeInsets.only(
                    top: MediaQuery.of(context).size.height * 0.36,
                  ),
                  // height: 900,
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.vertical(
                      top: Radius.circular(40),
                    ),
                    color: Colors.white,
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      Container(
                        height: 20,
                        decoration: const BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.only(
                            topLeft: Radius.circular(20.0),
                            topRight: Radius.circular(20.0),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceAround,
                          children: [
                            articleDataChips(
                              const CircleAvatar(
                                maxRadius: 8.0,
                              ),
                              '   Yaman M.',
                            ),
                            articleDataChips(
                              const Icon(
                                Icons.timer,
                                color: Colors.grey,
                                size: 15,
                              ),
                              '   12min',
                            ),
                            articleDataChips(
                              const Icon(
                                Icons.remove_red_eye_outlined,
                                color: Colors.grey,
                                size: 15,
                              ),
                              '  313',
                            ),
                          ],
                        ),
                      ),
                      articleText(widget.body),
                      adSpace(context),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _appBar(BuildContext context, ColorAnimated colorAnimated) {
    return AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
    );
  }
}
