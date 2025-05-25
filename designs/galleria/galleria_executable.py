import sys
from PyQt5.QtCore import *
from PyQt5.QtWidgets import *
from PyQt5.QtWebEngineWidgets import *
from PyQt5 import QtGui, QtCore


class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl.fromLocalFile('/login.html'))
        self.setCentralWidget(self.browser)


app = QApplication(sys.argv)
QApplication.setApplicationName("")
window = MainWindow()
window.setFixedWidth(1200)
window.setFixedHeight(600)
window.show()
app.exec_()
