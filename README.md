# meteor-skeleton

Skeleton Meteor project with Semantic UI, Masonry, Cards, Alerts, Emoji, and Flow Router. Simple but stylish monochrome theme, Semantic's default with some amendments.

Many hours of learning and debugging went into getting all this to work together.
Skip that and start with this precedent instead!

## How to use

git clone, run 'meteor' then browse localhost:3000

to add a card: 'meteor mongo' then db.items.insert({itemID: "anID", name:"An Item 1", miniText: "Some excerpt", createdAt: new Date()});

## Features this skeleton has

autopublish has been removed, don't worry there is demo pub/sub code.

sticky tab pulling out menu on the left side

black navbar at the top

login (Google & Facebook, plus password login (email or username)) - running iandouglas package for semantic-ui so we can add login options, profile pic etc

Alerts (see juliancwirko's package)

Masonry/cards, for that 2016 feel and responsive design

emoji (see emojione package)

underscore for bringing some python niceties to JS

simple Mongo collection set up and demo code for insert/find

Flow Router set up and configured, with 2 demo pages each fetching different items from the database.

Uses Blaze layout.
