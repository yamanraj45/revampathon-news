import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/screens/Article/articleScreen.dart';
import 'package:newsportalmobile/screens/HomeScreen/categorychips.dart';
import 'package:newsportalmobile/widgets/text.dart';

Widget topCard(BuildContext context, news) {
  var title = news[0]['title'];
  var image = news[0]['image'];
  var readTime = news[0]['readTime'];
  var date = news[0]['date'];
  var category = news[0]['category'];
  var content = news[0]['content'];
  return InkWell(
    onTap: () {
      Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ArticleScreen(title, image, content),
          ));
    },
    child: Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        image: DecorationImage(
            opacity: 0.5,
            fit: BoxFit.cover,
            image: NetworkImage(
              image,
            )),
        color: Theme.of(context).colorScheme.secondary,
        borderRadius: const BorderRadius.only(
            bottomLeft: Radius.circular(30), bottomRight: Radius.circular(30)),
      ),
      height: MediaQuery.of(context).size.height * 0.3,
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8),
              color: Theme.of(context).colorScheme.surface,
            ),
            padding: const EdgeInsets.all(8),
            child: Text(category),
          ),
          boldtext(title),
          const Text('Learn More ->'),
        ],
      ),
    ),
  );
}
