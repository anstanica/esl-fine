

if ($(".search-bar").is(":visible")) {
   
  const searchClient = algoliasearch(
    "YAXLOA4NOT",
    "be9404655bfed0d89e0a6faea46b1652"
  );

  autocomplete({
    container: ".search-bar",
    placeholder: "Search",
    getSources({ query }) {
      return [
        {
          sourceId: "*",
          getItems() {
            return getAlgoliaResults({
              searchClient,
              queries: [
                {
                  indexName: "dev_data",
                  query,
                  params: {
                    hitsPerPage: 10,
                    attributesToSnippet: ["name:10", "description:35"],
                    snippetEllipsisText: "…",
                  },
                },
              ],
            });
          },
          templates: {
            item({ item, components, html }) {
              return html`<div
                class="a-PanelFooter px-4 bottom-6 flex flex-col "
              >
                <div class="aa-ItemContent">
                  <div class="px-4 border-r">
                    <figure
                      class="aa-ItemIcon--size48"
                    >
                      <a href="${item.url}">
                        <img
                        class="aa-ItemIcon--picture"

                          src="${item.image}"
                          alt="${item.name}"
                          style="width: 128px; height: 128px; padding:0"
                        />
                      </a>
                    </figure>
                  </div>

                  <a href="${item.url}" target="_blank" style="font-weight:bold;">
                    <div
                      class="aa-ItemContentBody px-4 basis-1/2 hover:basis-1/2"
                    >
                      <div class="aa-ItemContentTitle aa-text-color-alpha text-2xl basis-1/4">
                        ${components.Snippet({
                          hit: item,
                          attribute: "name",
                        })}
                      </div>

                      <div class="aa-ItemContentDescription basis-1/4 ">
                        ${components.Snippet({
                          hit: item,
                          attribute: "description",
                        })}
                      </div>
                    </div></a
                  >
                </div>
              </div>`;
            },
          },
        },
      ];
    },
  });
} else {
  $(".search-bar").empty();
}
