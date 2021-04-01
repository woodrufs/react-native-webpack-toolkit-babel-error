# SearchWithFilter

`SearchWithFilter` is just a high level wrapper for `SearchInput` component.

It renders `SearchInput` with filter button that is commonly used in PLEX Mobile App.

## Properties

| Name                | Type             | Default | Description                             |
| ------------------- | ---------------- | ------- | --------------------------------------- |
| searchText          | string           |         | search input value                      |
| filtersCount        | number           |         | badge number of filter button           |
| onSearchValueChange | (string) => void |         | callback on changing search input value |
| onFilterButtonPress | () => void       |         | callback on filter button press         |
