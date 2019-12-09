# PERSPECTIVE

------

**Base URL:**

http://35.185.181.180


**User routes:**

| **Route**           | **METHOD** | **Description**                        |
| :------------------ | :--------- | :------------------------------------- |
| /users/myprofile    | GET        | Get a user details                     |
| /users/mybookmark   | GET        | Get all bookmarked article from a user |
| /users/mydraft      | GET        | Get all drafts article from a user     |
| /users/login        | POST       | Sign in user                           |
| /users/register     | POST       | Sign up new user                       |
| /users/googleLogin  | POST       | Sign in using OAuth2  Google         |

**Articles routes:**

| **Route**                           | **HTTP** | **Description**                             |
| :---------------------------------- | :------- | :------------------------------------------ |
| /articles/posted                    | GET      | Get all posted articles                     |
| /articles/draft/                    | GET      | Get all drafted articles from a user        |
| /articles/:id                       | GET      | Get an article details                      |
| /articles/slug/:slug                | GET      | Get an article by slug                      |
| /articles/add                       | POST     | Create new article                          |
| /articles/addDraft                  | POST     | Create new drafted article                  |
| /articles/remove/:id                | DELETE   | Delete an article                           |
| /articles/addbookmark/:id           | PATCH    | Bookmark an article                         |
| /articles/removebookmark/:id        | PATCH    | Remove an article from user's bookmark list |
| /articles/:id                       | PATCH    | Update an article                           |

**Errors:**

| Code | Name                  | Description                                         |
| :--- | :-------------------- | :-------------------------------------------------- |
| 400  | Bad Request           | Invalid user's submitted data                       |
| 403  | Forbidden             | User not authorize to perform an action             |
| 404  | Not Found             | The requested resource could not be found           |
| 409  | Conflict              | Request could not be completed due to conflict data |
| 500  | Internal Server Error | We had a problem with our server                    |

## **Find User**

- **URL:** `/users/myprofile`

- **Method:** `GET`

- **URL Params:** none

- **URL Headers:** 

  - Required :
    - `token = [token]`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
        {
            "id": 1,
            "email": "user@user.com",
            "name": "user",
            "password": "$Jgjya$sd32SDcal7642Shjhs*&^sada23",
            "articles" : [],

            "updatedAt": "2019-4-11T15:21:41.639Z",
            "createdAt": "2019-4-11T15:21:41.639Z"
        }
    ```

- **Error Response:**

  - **Status:** `404` **Content:**

    ```
        {
            "message": 'User not found'
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
       axios({
            url: `/users/myprofile`,
            methods: "get",
            headers: {
              token
            }
          })
    ```

## **Register User**

- **URL:** `/users/register`

- **Method:** `POST`

- **URL Params:** `None`

- **Data Params:** 

  - Required :
    - `email = [string]`
    - `name = [string]`
    - `password = [string]`

- **Success Response:**

  - **Status:** `201` **Content:**

    ```
        {
             "id": 1,
            "email": "user@user.com",
            "name": "user",
            "password": "$Jgjya$sd32SDcal7642Shjhs*&^sada23",
            "articles" : [],
            "bookmarks" : [],
            "updatedAt": "2019-4-11T15:21:41.639Z",
            "createdAt": "2019-4-11T15:21:41.639Z"
        }
    ```

- **Error Response:**

  - **Status:** `409` **Content:**

    ```
        {
            "message": 'Email already in registered'
        }
    ```
  
- **Sample call:**

  - **Using Axios:** 

    ```
      axios({
            method: 'post',
            url : '/users/register',
            data : {
              name : this.nameRegister,
              email : this.emailRegister,
              password : this.passwordRegister,
            }
          })
    ```

## 

## **Login User**

- **URL:** `/users/login`

- **Method:** `POST`

- **URL Params:** `None`

- **Data Params:** 

  - Required :
    - `email = [string]`
    - `password = [string]`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
    {
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcyMzYzNzUwfQ.Gf0JAtSpcI1r5C6VHAlp-znvaFxJZL5b5pJ5gaCTrNs",
        "name": "user",
        "email" : "user@user.com"
    }
    ```

- **Error Response:**

  - **Status:** `403` **Content:**

    ```
      {
            "message": 'Email/password wrong'
      }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
      axios({
            method: 'post',
            url : '/users/login',
            data : {
              email : this.email,
              password : this.password,
            }
          })
    ```

## **Login Using Google OAuth**

- **URL:** `/users/googleLogin`

- **Method:** `POST`

- **URL Params:** `None`

- **Data Params:** 

  - Required :
    - `token = [id_token Google]`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
    {
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTcyMzYzNzUwfQ.Gf0JAtSpcI1r5C6VHAlp-znvaFxJZL5b5pJ5gaCTrNs",
        "name": "user",
        "email" : "user@user.com"
    }
    ```

- **Error Response:**

  - **Status:** `400` **Content:**

    ```
        {
            "message": 'Invalid Email or password'
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
       axios({
              url : '/users/googleLogin',
              method : 'post',
              data : {
                id_token
              }
            })
    ```


## **Post New Article**

- **URL:** `/articles/add`

- **Method:** `POST`

- **URL Params:** `None`

- **Data Params:** 

  - Required :
    - `title = [string]`
    - `content = [string]`
  - Optional :
    - `tags = [array]`
    - `image = file`

- **URL Headers:** 

  - Required :
    - `token = token`

- **Success Response:**

  - **Status:** `201` **Content:**

    ```
    {
        tags: [
        "tag 1",
        "tag 2"
        ],
        draft: true,
        _id: "5dc8532b25850d0da577ef31",
        title: "This is article's title",
        content: "This is content of article",
        image: "https://storage.googleapis.com/generalbucket.afifahrahmak.site/15734095790961_OGXNxyC9d_XAMExEbs9K4g.jpeg",
        createdAt: "2019-4-11T18:12:59.664Z",
        updatedAt: "2019-4-11T18:13:21.289Z",
        slug: "This-is-article's-title",
        __v: 0
    }
    ```

- **Error Response:**

  - **Status:** `400` **Content:**

    ```
        {
            "message": ['Title is required', 'content is required']
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
      axios({
            method : 'post',
            url : '/articles/add',
            data : formData,
            headers : {
              token,
              'Content-Type': 'multipart/form-data'
            }
          })
    ```



## **Get All Posted Articles**

- **URL:** `/articles/posted`

- **Method:** `GET`

- **URL Params:** `none`

- **Data Params:** `none`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
    [
      {
        tags: [
        "tag 1",
        "tag 2"
        ],
        draft: false,
        _id: "5dc8532b25850d0da577ef31",
        title: "This is article's title",
        content: "This is content of article",
        userId: {
            articles: [
            "5dc8532b25850d0da577ef31"
            ],
            bookmarks: [
            "5dc8532b25850d0da577ef31",
            "5dc851e725850d0da577ef2f"
            ],
            _id: "5dc852b125850d0da577ef30",
            name: "user",
            email: "user@gmail.com",
            password: "$2a$10$aIwio0cvLA017bJNczmpOe8wDrREtFVIQeC7npPdcZN5mSwD6A0XS",
            createdAt: "2019-4-11T18:10:57.880Z",
            updatedAt: "2019-4-11T18:45:09.694Z",
            __v: 0
        },
        image: "https://storage.googleapis.com/generalbucket.afifahrahmak.site/15734095790961_OGXNxyC9d_XAMExEbs9K4g.jpeg",
        createdAt: "2019-4-11T18:12:59.664Z",
        updatedAt: "2019-4-11T18:13:21.289Z",
        slug: "This-is-article's-title",
        __v: 0
      },
      {
        tags: [
        "tag 3",
        "tag 2"
        ],
        draft: false,
        _id: "5dc851e725850d0da577ef2f",
        title: "This is article's title (updated)",
        content: "this is content (updated)",
        userId: {
            articles: [
            "5dc851e725850d0da577ef2f"
            ],
            bookmarks: [ ],
            _id: "5dc8505125850d0da577ef2e",
            name: "user",
            email: "user@user.com",
            password: "$2a$10$aIwio0cvLA017bJNczmpOezXmF2w7jshX9JcTKqrRIg7qfqkRsBZ2",
            createdAt: "2019-4-11T18:00:49.961Z",
            updatedAt: "2019-4-11T18:08:47.018Z",
            __v: 0
            },
        image: "https://storage.googleapis.com/generalbucket.afifahrahmak.site/15734092553090_bGo_CxWAPXgEFbsh.jpeg",
        createdAt: "2019-4-11T18:07:36.128Z",
        updatedAt: "2019-4-11T18:09:18.773Z",
        slug: "This-is-article's-title (updated)",
        __v: 0
        }
    ]
    ```

- **Error Response:**

  - **Status:** `500` **Content:**

    ```
        {
            "message": 'internal server error'
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
      axios({
            methods : 'get',
            url: '/articles/posted'
          })
    ```

## **Get All Drafted Articles From a User**

- **URL:** `/articles/draft`

- **Method:** `GET`

- **URL Params:** `none`

- **Data Params:** `none`

- **URL Headers:** 

  - Required :
    - `token = [token]`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
     {
            "id": 1,
            "email": "user@user.com",
            "name": "user",
            "password": "$Jgjya$sd32SDcal7642Shjhs*&^sada23",
            "articles" : [{
                tags: [
                "tag 1",
                "tag 2"
                ],
                draft: true,
                _id: "5dc8532b25850d0da577ef31",
                title: "This is article's title",
                content: "This is content",
                image: "https://storage.googleapis.com/generalbucket.afifahrahmak.site/15734095790961_OGXNxyC9d_XAMExEbs9K4g.jpeg",
                createdAt: "2019-4-11T18:12:59.664Z",
                updatedAt: "2019-4-11T18:13:21.289Z",
                slug: "This-is-article's-title",
                __v: 0
            }],
        "updatedAt": "2019-4-11T15:21:41.639Z",
        "createdAt": "2019-4-11T15:21:41.639Z"
    }
    ```

- **Error Response:**

  - **Status:** `404` **Content:**

    ```
        {
            "message": 'Draft articles not found'
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
      axios({
            url: `/articles/draft`,
            methods: "get",
            headers: {
              token
            }
          })
    ```

## **Remove an Article**

- **URL:** `/articles/remove/:id`

- **Method:** `DELETE`

- **URL Params:** 

  - Required :
    - `id = [string]`

- **URL Headers:** 

  - Required :
    - `token = token`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
    {
        message : 'article deleted'
    }
    ```

- **Error Response:**

  - **Status:** `403` **Content:**

    ```
        {
            "message": 'You are not authorize to perform this action'
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
    axios({
            method : 'delete',
            url : `/articles/remove/${id}`,
            headers : {
              token : localStorage.getItem('token')
            }
          })
    ```

## **Update an Article**

- **URL:** `/articles/:id`
- **Method:** `PATCH`
- **URL Params:** 
  - Required :
    - `id = [string]`
- **URL Headers:** 
  - Required :
    - `token = token`

- **Data Params:** 
  - Required :
    - `title = [string]`
    - `content = [string]`
  - Optional :
    - `tags = [array]`
    - `image = file`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
    {
        message : 'article updated'
    }
    ```

- **Error Response:**

  - **Status:** `403` **Content:**

    ```
        {
            "message": 'You are not authorize to perform this action'
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
    axios({
            method : 'patch',
            url : `/articles/${id}`,
            data : formData,
            headers : {
              token,
              'Content-Type': 'multipart/form-data'
            }
          })
    ```

## **Add Article Into Bookmark List**

- **URL:** `/articles/addbookmark/:id`
- **Method:** `PATCH`
- **URL Params:** 
  - Required :
    - `id = [string]`
- **URL Headers:** 
  - Required :
    - `token = token`

- **Success Response:**

  - **Status:** `200` **Content:**

    ```
    {
        message : 'user updated'
    }
    ```

- **Error Response:**

  - **Status:** `409` **Content:**

    ```
        {
            "message": 'You've bookmarked this article'
        }
    ```

- **Sample call:**

  - **Using Axios:** 

    ```
        axios({
            url : `/articles/addbookmark/${id}`,
            method : 'patch',
            headers : {
              token : localStorage.getItem('token')
            }
          })
    ```