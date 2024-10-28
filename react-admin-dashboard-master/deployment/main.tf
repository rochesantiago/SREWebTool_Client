provider "kubernetes" {
  config_path = "~/.kube/config"  # Adjust this if your kubeconfig is in a different path
}

resource "kubernetes_deployment" "react_app" {
  metadata {
    name = "react-app-deployment"
    labels = {
      app = "react-app"
    }
  }

  spec {
    replicas = 2
    selector {
      match_labels = {
        app = "react-app"
      }
    }

    template {
      metadata {
        labels = {
          app = "react-app"
        }
      }

      spec {
        container {
          image = "roche12/react-app:latest"
          name  = "react-app-container"
          port {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "react_app_service" {
  metadata {
    name = "react-app-service"
  }

  spec {
    selector = {
      app = "react-app"
    }

    port {
      port        = 80
      target_port = 80
    }

    type = "NodePort"
  }
}