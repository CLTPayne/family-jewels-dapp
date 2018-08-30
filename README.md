# Family Jewels

A web application to display the CK players with the best collection of family jewels.

### User Stories:
```
As an ethereum whale
So that I know how great I am   
I want to see a list of the top players ranked by collection of family jewels

As an ethereum whale
So that I know how much better than other players I am
I want to see a score for all family jewel collectors

As an ethereum whale
So that I have the latest rankings
I wan the leader board to be updated regularly

As an aspiring collector
So that I know who the competition are
I want to see the collector's account name on the leader board

As an aspiring collector
So that I know exactly what cats the competition have
I want to be able to click through from the leader board to view a game profile
```

### System Requirements:
```
As a system
So that I can calculate the best family jewel collection
I want to query the API for all of the 32,000 possible jewels

As a system
So that I can assign points per player per jewel
I want look up the metamask account of each jewelled CK player

As a system
So that I can assign 100 points to an account for with a diamond jewel
I want to keep a tally of jewels per player per trait

As a system
So that I can assign 25 points to an account for with a gilded jewel
I want to keep a tally of jewels per player per trait

As a system
So that I can assign 5 points to an account for with a amethyst jewel
I want to keep a tally of jewels per player per trait

As a system
So that I have a fair and engaging league
I want to only award points once for the top jewel per player per trait

```

### Reference Points:
All four available jewels in the game:

![jewels](./readme_images/Game_Jewels.png)

Example of a player's family jewels for a single trait. For this trait the player would be awarded 25 points for the gilded, as it's their top jewel. No points would be awarded for the lesser jewels:

![account](./readme_images/Example_Family_Jewels_Lavander_Trait.png)

### Mockup:
Web (full screen) optimised:
![web]()

### Code Style:
JavaScript and node.js

### Code Example:
```
```

### Approach to the build:
1. Investigate the CK Public API using Postman to test a range of endpoints and see the full scope of data available. API documentation is [here](https://docs.api.cryptokitties.co/).
2. If possible, the CK game developers would prefer that data is not stored locally, but that the API is pinged as often as needed as they are collecting data on the endpoints.
3. Consider server rendered application as it'll rank higher in search engine results and thus potentially gain more traffic.
