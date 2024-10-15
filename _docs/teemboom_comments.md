---
title: /teemboom_comments
---
## Endpoint: `/teemboom_comments`
**Method:** `POST`
**Description:** Retrieves webpage comments by `page_id`.
### Request
**Body:**
```
{
    "page_id": "string",
    "filter": "oldest|newest|relevance|top",  
    "range": "list|Array",
}
```

### Response
**Success:**
```
{
    "status": True, 
    "data": {
        "comments_no": "int", 
        "comments": "list"
    }
}
```
**Failure:**
```
{
    "status": False, 
    "message": "string"
}
```
