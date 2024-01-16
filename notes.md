## User stories
1. [x] See all hog cards w/name and image on load
    - "ui grid container" on parent of cards
    - "ui eight wide column" on children
2. [x] Click a hog and see more details
    - HogDetail will be conditionally rendered as a child of HogTile
3. [x] Click a checkbox that will enable a 'greased' filter
4. [x] Select a dropdown that will sort hogs by name or weight

## Component Tree
- App [hogs, filter, sort]
    - Nav (rename Header?)
    - Filter (events: update filter and sort on App)
    - HogList (props: filtered and/or sorted list of hogs)
        - HogTile* [toggledetail]
            - HogDetail

## Data Shape
```js
{
    name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
  }
  ```