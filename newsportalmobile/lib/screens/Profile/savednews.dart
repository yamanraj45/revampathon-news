import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/screens/Article/articleScreen.dart';
import 'package:newsportalmobile/widgets/text.dart';

Widget savedNews(BuildContext context, news) {
  var title = news[0]['title'];
  var image = news[0]['image'];
  var readTime = news[0]['readTime'];
  var date = news[0]['date'];
  var category = news[0]['category'];
  var content = news[0]['content'];
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      boldtext('Saved News', size: 18),
      ListView.builder(
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: 13,
        itemBuilder: (context, index) {
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
                            : Image.network(homeScreenimage, fit: BoxFit.cover),
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
                                : 'This is a section for title and her goes the titel'),
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
