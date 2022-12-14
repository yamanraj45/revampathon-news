import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/widgets/text.dart';

Widget hotNews(BuildContext context) {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      boldtext('Hot News', size: 18),
      ListView.builder(
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: 5,
        itemBuilder: (context, index) {
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: Card(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: [
                    Container(
                      height: MediaQuery.of(context).size.height * 0.15,
                      width: MediaQuery.of(context).size.width * 0.2,
                      child: Image.network(homeScreenimage, fit: BoxFit.cover),
                      decoration: const BoxDecoration(color: Colors.grey),
                    ),
                    Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          width: MediaQuery.of(context).size.width * 0.6,
                          child: boldtext(
                              'This is a section for title and her goes the titel'),
                        ),
                        normalText('Descr')
                      ],
                    )
                  ],
                ),
              ),
            ),
          );
        },
      )
    ],
  );
}
