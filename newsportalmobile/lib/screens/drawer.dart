import 'package:flutter/material.dart';
import 'package:newsportalmobile/widgets/gappingbox.dart';

Drawer drawer() {
  return Drawer(
    child: Center(
      child: ListView(
        children: <Widget>[
          gapbox(size: 40),
          CircleAvatar(
            radius: 60,
          ),
          gapbox(size: 30),
          ListTile(
            leading: Icon(Icons.gamepad),
            title: Text('Game'),
            onTap: () {
              // Navigate to the home screen
            },
          ),
          ListTile(
            leading: Icon(Icons.brightness_1_outlined),
            trailing: Switch(value: false, onChanged: (value) {}),
            title: Text('Dark Mode'),
            onTap: () {
              // Navigate to the settings screen
            },
          ),
          ListTile(
            leading: Icon(Icons.help),
            title: Text('Help'),
            onTap: () {
              // Navigate to the help screen
            },
          ),
        ],
      ),
    ),
  );
}
