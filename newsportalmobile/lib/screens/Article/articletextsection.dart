import 'package:flutter/material.dart';

Widget articleText(body) {
  return Padding(
    padding: const EdgeInsets.all(8.0),
    child: Column(
      children: [
        Text('''$body'''),
      ],
    ),
  );
}
