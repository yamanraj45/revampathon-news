import 'package:flutter/material.dart';
import 'package:newsportalmobile/widgets/text.dart';

class SearchScreenNewsCard extends StatelessWidget {
  const SearchScreenNewsCard({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (context, index) {
        return Padding(
          padding: const EdgeInsets.all(8.0),
          child: Card(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                children: [
                  Container(
                    height: MediaQuery.of(context).size.height * 0.15,
                    width: MediaQuery.of(context).size.width * 0.2,
                    decoration: const BoxDecoration(color: Colors.grey),
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [boldtext('Title'), normalText('Descr')],
                  )
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
