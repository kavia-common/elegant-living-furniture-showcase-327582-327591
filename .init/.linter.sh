#!/bin/bash
cd /home/kavia/workspace/code-generation/elegant-living-furniture-showcase-327582-327591/frontend_web
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

