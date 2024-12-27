<script>
    import {Router , Route} from "svelte-routing";
    import To from "../page/To.svelte";
    import Home from "../page/Home.svelte";
let url = $state("");
</script>

<Router {url}>
    <Route path="/:nama" let:params>
        <To nama="{params.nama}" />
    </Route>
    <Route path="/" component={Home} />
</Router>

