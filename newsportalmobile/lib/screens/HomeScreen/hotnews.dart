import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/screens/Article/articleScreen.dart';
import 'package:newsportalmobile/widgets/text.dart';

Widget hotNews(BuildContext context, news) {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      boldtext('Hot News', size: 18),
      ListView.builder(
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: news.length,
        itemBuilder: (context, index) {
          var title = news[index]['title'];
          var image = news[index]['image'];
          var readTime = news[index]['readTime'];
          var date = news[index]['date'];
          var category = news[index]['category'];
          var content = news[index]['content'];
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: InkWell(
              onTap: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) =>
                          ArticleScreen(title, image, content),
                    ));
              },
              child: Card(
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    children: [
                      Container(
                        height: MediaQuery.of(context).size.height * 0.15,
                        width: MediaQuery.of(context).size.width * 0.2,
                        decoration: const BoxDecoration(color: Colors.grey),
                        child: index % 5 == 0 && index != 0
                            ? const FlutterLogo()
                            : Image.network(image, fit: BoxFit.cover),
                      ),
                      const SizedBox(
                        height: 10,
                        width: 10,
                      ),
                      Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(
                            width: MediaQuery.of(context).size.width * 0.6,
                            child: boldtext(index % 5 == 0 && index != 0
                                ? 'Space For Advertisements'
                                : title),
                          ),
                          normalText('Descr')
                        ],
                      )
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      )
    ],
  );
}
