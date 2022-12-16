import 'package:flutter/material.dart';

Widget boldtext(String text, {double size = 14, Color color = Colors.black}) {
  return Text(
    text,
    style: TextStyle(fontWeight: FontWeight.bold, fontSize: size, color: color),
  );
}

Widget normalText(String text, {double size = 14, Color color = Colors.black}) {
  return Text(
    text,
    style: TextStyle(fontSize: size, color: color),
  );
}
