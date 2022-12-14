import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

Widget searchbar() {
  return Container(
    padding: const EdgeInsets.all(8),
    child: TextField(
      decoration: InputDecoration(
        hintText: 'Search ',
        suffixIcon: const Icon(
          Icons.filter_list_rounded,
        ),
        prefixIcon: const Icon(Icons.search),
        border: const OutlineInputBorder(
          borderSide: BorderSide.none,
          borderRadius: BorderRadius.all(
            Radius.circular(20),
          ),
        ),
        filled: true,
        fillColor: Colors.grey[300],
      ),
    ),
  );
}
