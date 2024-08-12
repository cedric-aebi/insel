import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:pspdfkit_flutter/pspdfkit.dart';

/// Displays detailed information about a SampleItem.
class SampleItemDetailsView extends StatelessWidget {
  const SampleItemDetailsView({super.key});

  Future<String> extractAsset(BuildContext context, String assetPath) async {
    if (kIsWeb) {
      return assetPath;
    }

    final bytes = await DefaultAssetBundle.of(context).load(assetPath);
    final list = bytes.buffer.asUint8List();
    final tempDir = await Pspdfkit.getTemporaryDirectory();
    final tempDocumentPath = '${tempDir.path}/$assetPath';
    final file = File(tempDocumentPath);

    await file.create(recursive: true);
    file.writeAsBytesSync(list);
    return file.path;
  }

  static const routeName = '/sample_item';
  static const documentPath = 'assets/pdfs/HYG-157.pdf';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Item Details'),
      ),
      body: FutureBuilder<String>(
          future: extractAsset(context, documentPath),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              /// PspdfkitWidget is a widget that displays a PDF document.
              return PspdfkitWidget(
                documentPath: snapshot.data!,
                configuration: PdfConfiguration(
                    iOSRightBarButtonItems: ['readerViewButtonItem']),
              );
            } else if (snapshot.hasError) {
              return Center(
                child: Text('${snapshot.error}'),
              );
            } else {
              return const Center(
                child: CircularProgressIndicator(),
              );
            }
          }),
    );
  }
}
