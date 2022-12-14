import 'package:flutter/cupertino.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/widgets/text.dart';

Widget breakingNews(BuildContext context) {
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
          scrollDirection: Axis.horizontal,
          itemBuilder: (context, index) => Column(
            children: [
              Column(
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
                      homeScreenimage,
                      fit: BoxFit.cover,
                    ),
                  ),
                  SizedBox(
                    width: MediaQuery.of(context).size.width * 0.31,
                    child: boldtext(
                        'Hello This is place for title of breaking news',
                        size: 13),
                  ),
                  normalText('Author', size: 11)
                ],
              ),
            ],
          ),
        ),
      ),
    ],
  );
}
