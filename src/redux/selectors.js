export const selectContacts = (state) => state.contacts;

export const selectFilters = (state) => state.filters;

export const selectFilterContacts = (state) => {
  const filter = selectFilters(state);
  const { items } = selectContacts(state);
  return items.filter(
    (i) =>
      i.name.toLowerCase().includes(filter.toLowerCase()) ||
      i.phone.toLowerCase().includes(filter.toLowerCase())
  );
};
