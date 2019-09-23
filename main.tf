data "external" "public_files" {
  program = ["sh", "buildPublic"]
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = var.website_domain
  acl    = "public-read"

  website {
    index_document = "index.html"
  }
}

locals {
  content-types = {
    png = "image/png",
    html = "text/html",
    js = "text/javascript",
    otf = "font/otf",
    css = "text/css"
  }
  files = fileset("${path.module}/${data.external.public_files.result.baseDir}", "**/*.{png,html,js,otf,css}")
}

resource "aws_s3_bucket_object" "editor_bucket_objects" {
  for_each = local.files

  acl = "public-read"
  bucket = aws_s3_bucket.website_bucket.bucket
  key    = each.value

  source = "${path.module}/${data.external.public_files.result.baseDir}/${each.value}"
  etag =    filemd5("${path.module}/${data.external.public_files.result.baseDir}/${each.value}")

  content_type = local.content-types[element(split(".", each.value), length(split(".", each.value)) - 1)]
}