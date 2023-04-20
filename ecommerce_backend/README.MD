# Order Management

## Schema Structure

### users collection

```
{
    'name': string,
    'email': string,
    'password': string,
    'address': string,
    'orders': [{}]
    'isadmin': boolean
}
```

### products collection

```
{
    'pid':string,
    'pname':string,
    'pquantity':int,
    'pprice': int,
}
```

### orders collection

```
{
    'oid': string,
    'otime': string,
    'ototal': int,
    'ostatus': string
}
```
