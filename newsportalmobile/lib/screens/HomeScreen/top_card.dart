import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/widgets/text.dart';

Widget topCard(BuildContext context) {
  return Container(
    padding: const EdgeInsets.all(8),
    decoration: BoxDecoration(
      image: const DecorationImage(
          opacity: 0.5,
          fit: BoxFit.cover,
          image: NetworkImage(
            homeScreenimage,
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
          child: const Text('Cat'),
        ),
        boldtext(
            'This is a place for title you can keep as longtitle as you want because it will not overflow',
            size: 18),
        const Text('Learn More ->'),
      ],
    ),
  );
}
