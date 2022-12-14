import 'package:flutter/material.dart';

Widget boldtext(String text, {double size = 14}) {
  return Text(
    text,
    style: TextStyle(fontWeight: FontWeight.bold, fontSize: size),
  );
}

Widget normalText(String text, {double size = 14}) {
  return Text(
    text,
    style: TextStyle(fontSize: size),
  );
}
