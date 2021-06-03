from flask import Flask

def create_app():
    app = Flask(__name__)

    app.config["SECRET_KEY"] = "Coder_)(#)_2004"

    from .views import views

    app.register_blueprint(views, url_perfix='/')

    return app