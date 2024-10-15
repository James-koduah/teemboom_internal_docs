---
title: /teemboom_config
---


## Endpoint: `/teemboom_config`
**Method:** `POST`
**Description:** Retrieves site configuration by `page_id`.
### Request
**Body:**
```
{"page_id": "string"}
```
### Response
**Success:**
```
{
    "status": True, 
    "data": config_data -> dict
}
```
**Failure:**
```
{
    "status": False, 
    "message": "string"
}
```

<!-- 
## Endpoint: `/teemboom_comments`
**Method:** `POST`
**Description:** Retrieves webpage comments by `page_id`.
### Request
**Body:**
```
{"page_id": "string",
"filter": "oldest|newest|relevance|top",  
"range": "list|Array",}
```

### Response
**Success:**
```{"status": True, "data": {"comments_no": "int", "comments": "list"}}```
**Failure:**
```{"status": False, "message": "string"}```

 -->