import 'package:flutter/material.dart';
import 'package:newsportalmobile/directory.dart';
import 'package:newsportalmobile/screens/Article/widgets/chips.dart';

class ArticleScreen extends StatefulWidget {
  const ArticleScreen({super.key});

  @override
  State<ArticleScreen> createState() => _ArticleScreenState();
}

class _ArticleScreenState extends State<ArticleScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: CustomScrollView(
          slivers: <Widget>[
            //2
            SliverAppBar(
              expandedHeight: 250.0,
              flexibleSpace: FlexibleSpaceBar(
                centerTitle: true,
                title: const Text(
                  'Leap Frog Organize Remap',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.normal,
                  ),
                ),
                background: Image.network(
                  homeScreenimage,
                  fit: BoxFit.fill,
                ),
              ),
            ),
            //3s
            SliverToBoxAdapter(
              child: Container(
                color: Color(0xff5c63f1),
                height: 20,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    Container(
                      height: 20,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.only(
                          topLeft: const Radius.circular(20.0),
                          topRight: const Radius.circular(20.0),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceAround,
                        children: [
                          articleDataChips(
                            const CircleAvatar(
                              maxRadius: 8.0,
                            ),
                            '   Yaman M.',
                          ),
                          articleDataChips(
                            const Icon(
                              Icons.timer,
                              color: Colors.grey,
                              size: 15,
                            ),
                            '   12min',
                          ),
                          articleDataChips(
                            Icon(
                              Icons.remove_red_eye_outlined,
                              color: Colors.grey,
                              size: 15,
                            ),
                            '  313',
                          ),
                        ],
                      ),
                    ),
                    Column(
                      children: const [
                        Text(
                            '''China has announced it will de-activate a phone app that has tracked people's movements during the pandemic.
      
      The national app, which has been operational for three years, will go offline at the end of Monday.
      
      It is the latest policy change that signals Beijing is abandoning its controversial zero-Covid strategy.
      
      The move is highly symbolic but will not have a huge impact on people's daily lives because of the local apps still in use in cities across China.
      
      The state-run Communications Itinerary Card app, which uses phone signals to track whether someone has travelled to an area seen as high-risk, was seen as a central part of China's zero-Covid policy.
      China has announced it will de-activate a phone app that has tracked people's movements during the pandemic.
      
      The national app, which has been operational for three years, will go offline at the end of Monday.
      
      It is the latest policy change that signals Beijing is abandoning its controversial zero-Covid strategy.
      
      The move is highly symbolic but will not have a huge impact on people's daily lives because of the local apps still in use in cities across China.
      
      The state-run Communications Itinerary Card app, which uses phone signals to track whether someone has travelled to an area seen as high-risk, was seen as a central part of China's zero-Covid policy.'''),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
