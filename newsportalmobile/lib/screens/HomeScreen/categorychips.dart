import 'package:flutter/material.dart';
import 'package:newsportalmobile/widgets/gappingbox.dart';
import 'package:newsportalmobile/widgets/text.dart';

List category = [
  {
    'title': 'Politics',
  },
  {
    'title': 'Sports',
  },
  {
    'title': 'Economy',
  },
  {
    'title': 'Editorial',
  },
  {
    'title': 'Editorial',
  },
  {
    'title': 'Editorial',
  }
];

class CategoryChips extends StatelessWidget {
  const CategoryChips({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        boldtext('Category', size: 18),
        gapbox(size: 10),
        SizedBox(
          height: 40,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            itemCount: category.length,
            itemBuilder: ((context, index) {
              return Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  color: Colors.black,
                ),
                padding: EdgeInsets.symmetric(horizontal: 5),
                height: 50,
                child: Center(
                  child: boldtext(category[index]['title'], color: Colors.grey),
                ),
              );
            }),
            separatorBuilder: (BuildContext context, int index) {
              return const SizedBox(
                height: 10,
                width: 10,
              );
            },
          ),
        ),
      ],
    );
  }
}
