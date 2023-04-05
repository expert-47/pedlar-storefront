if test "$ENV" = "dev"
  then
    rm -f ./.env.production
    mv ./.env.development ./.env.production
  fi

npm run build