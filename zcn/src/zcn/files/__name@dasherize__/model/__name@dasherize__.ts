export class <%= classify(name) %>Dto {
    id: string;
    <%= (fields) %>:string;
    <%= (fields).split(",").lenght %>

    <% for(let i=0; (fields).split(",").lenght>=i;i++){ %>
    <%= fields[i] %>:string;
    <% } %>
}
