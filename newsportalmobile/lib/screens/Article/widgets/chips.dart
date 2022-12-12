import 'package:flutter/material.dart';

Widget articleDataChips(Widget leadingData, String trailingData) {
  return Container(
    padding: EdgeInsets.all(5.0),
    decoration: BoxDecoration(
      color: Colors.black,
      borderRadius: BorderRadius.circular(8.0),
    ),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        leadingData,
        Text(
          trailingData,
          style: TextStyle(
            color: Colors.grey,
          ),
        ),
      ],
    ),
  );
}
