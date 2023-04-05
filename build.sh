if test "$GCP_PROJECT" = "pedlar-dev"
  then
    rm -f ./.env.production
    mv ./.env.development ./.env.production
  fi

npm run next:build