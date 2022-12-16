import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/screens/Article/articleScreen.dart';
import 'package:newsportalmobile/widgets/text.dart';

Widget breakingNews(BuildContext context, news) {
  return Column(
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [boldtext('Breaking News', size: 18), normalText('More')],
      ),
      Container(
        // padding: const EdgeInsets.symmetric(horizontal: 8),
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height * 0.3,
        child: ListView.builder(
          itemCount: news.length,
          scrollDirection: Axis.horizontal,
          itemBuilder: (context, index) {
            var title = news[index]['title'];
            var image = news[index]['image'];
            var readTime = news[index]['readTime'];
            var date = news[index]['date'];
            var category = news[index]['category'];
            var content = news[index]['content'];
            var author = news[index]['author'];
            print(news);
            return Column(
              children: [
                InkWell(
                  onTap: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) =>
                              ArticleScreen(title, image, content),
                        ));
                  },
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                            // color:
                            // Theme.of(context).colorScheme.secondary,
                            borderRadius: BorderRadius.circular(8.0)),
                        height: MediaQuery.of(context).size.height * 0.2,
                        width: MediaQuery.of(context).size.width * 0.37,
                        child: Image.network(
                          image,
                          fit: BoxFit.cover,
                        ),
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width * 0.31,
                        child: boldtext(title, size: 13),
                      ),
                      normalText(author, size: 11)
                    ],
                  ),
                ),
              ],
            );
          },
        ),
      ),
    ],
  );
}
