import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // convert items array to a lodash wrapper then back to array
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
