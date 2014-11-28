import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
import threading
import time
import json
import sys
import os
import socket
import signal
import subprocess

currentCode = ""
process = None

class SaveDomHandler(tornado.web.RequestHandler):
	def post (self):
		code = self.get_argument('code', '')
		defaultFile = open ("default.xml", 'w')
		defaultFile.write (code)
		defaultFile.close ()
		self.write ("Done")

class LoadDomHandler(tornado.web.RequestHandler):
	def get (self):
		defaultFile = open ("default.xml", 'r')
		xml = defaultFile.read ()
		defaultFile.close ()
		self.write (xml)

class RunHandler(tornado.web.RequestHandler):
	def post (self):
		global process
		fileName = self.get_argument('fileName', '')
		code = self.get_argument('code', '')
		defaultFile = open ("default.py", 'w')
		defaultFile.write (code)
		defaultFile.close ()
		output = "okay"
		if (process != None):
			try: 
				process.killpg (process.pid, signal.SIGTERM)
				process = None
			except:
				pass
		try:
			process = subprocess.Popen ("python default.py", stdout=subprocess.PIPE, shell=True, preexec_fn=os.setsid)
			#stdoutdata, stderrdata = process.communicate()
			#if (process.returncode == 1):
			#	process = None
			#	output = "Error connecting to minecraft - Is it running?"
		except:
			output = "Error connecting to minecraft - Is it running?"
		self.write (output)
		
	get = post

class StopHandler(tornado.web.RequestHandler):
	def get (self):
		global process
		if (process != None):
			try:
				process.killpg (process.pid, signal.SIGTERM)
			except:
				pass
			process = None


if getattr(sys, 'frozen', None):
	basedir = sys._MEIPASS
	htDocs = basedir + "/blockly/blockly-read-only/"
else:
	htDocs = "./blockly/blockly-read-only/"
 
application = tornado.web.Application([
	(r'/run', RunHandler),
	(r'/stop', StopHandler),
	(r'/saveDom', SaveDomHandler),
	(r'/loadDom', LoadDomHandler),
	(r'/(.*)', tornado.web.StaticFileHandler, {'path': htDocs, "default_filename": "index.html"}),
])
http_server = tornado.httpserver.HTTPServer (application)
http_server.listen(8888, "0.0.0.0")
tornado.ioloop.IOLoop.instance ().start ()

