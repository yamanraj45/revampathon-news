import 'package:flutter/material.dart';

Widget adSpace(BuildContext context) {
  return Container(
    padding: const EdgeInsets.symmetric(vertical: 30),
    height: MediaQuery.of(context).size.height * 0.2,
    width: MediaQuery.of(context).size.width * 0.9,
    color: Colors.grey,
    child: const Center(
      child: Text('Space For Advertisment'),
    ),
  );
}
