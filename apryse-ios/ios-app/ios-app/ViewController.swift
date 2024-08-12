//
//  ViewController.swift
//  ios-app
//
//  Created by Cedric Aebi on 31.07.2024.
//

import UIKit
import PDFNet
import Tools

class ViewController: UIViewController, PTReflowViewControllerDelegate {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    override func viewDidAppear(_ animated: Bool) {
        // Get the path to document in the app bundle.
        let pdfPath: String? = Bundle.main.path(forResource: "HYG-157", ofType: "pdf")
        
        // Instantiate a new PDFDoc with the path to the file.
        let docToOpen = PTPDFDoc(filepath: pdfPath)!

        // Create a PTDocumentController
        let documentController = PTDocumentController()
        
        // Initialize reflow view controller with a PTPDFViewCtrl instance.
        let reflowViewController = PTReflowViewController(pdfViewCtrl: documentController.pdfViewCtrl)
        // The PTDocumentController must be in a navigation controller before a document can be opened
        let navigationController = UINavigationController(rootViewController: reflowViewController)
        navigationController.modalPresentationStyle = .fullScreen
        navigationController.navigationBar.isTranslucent = false
        navigationController.toolbar.isTranslucent = false
        // Open a file from URL.
        // let fileURL: URL = URL(string:"https://www.fess.ie/images/stories/ResourcesForTutors/Referencing_Handbook_files/DiagramsFiguresImagesTables_58-59.pdf")!
        documentController.openDocument(with: docToOpen)
        // Show navigation (and document) controller.
        self.present(navigationController, animated: true, completion: nil)
    }
}

