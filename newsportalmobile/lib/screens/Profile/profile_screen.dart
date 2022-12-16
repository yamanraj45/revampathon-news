import 'package:flutter/material.dart';
import 'package:newsportalmobile/screens/HomeScreen/hotnews.dart';
import 'package:newsportalmobile/screens/Profile/savednews.dart';
import 'package:newsportalmobile/widgets/text.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(
              height: 200,
              child: CircleAvatar(maxRadius: 50),
            ),
            const Padding(
              padding: EdgeInsets.all(16.0),
              child: Text(
                'John Doe',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            // savedNews(context)
          ],
        ),
      ),
    );
  }
}
