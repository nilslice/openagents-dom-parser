use extism_pdk::*;
use html_parser::Dom;

#[plugin_fn]
pub fn run(input: String) -> FnResult<String> {
    Ok(Dom::parse(&input)?.to_json_pretty()?)
}
