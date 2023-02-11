# movie

**movie** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

This is implementation of movie chain requirements.

# Solution
- add storedMovie map object to check title is unique or not. 
  Movie is just list objects and then if list increase greatly, it fall into massive loop.
- added storedReview double map ([movieId-creator]) to protect review duplication. 
  
# Unit Test.

```
go test -v ./...
```

## Get start chain

```
  ignite c serve -r
```

- transaction example
  ```
  export Alice={wallet address}
  movied tx movie create-movie "zootopia" "new movie" "2019" --from Alice --yes
  ```
  ...
  if you want to check tx, query commands

```
movied [tx|query] [module_name] --help
```

## Improvement thoughts

- Need to implement Integration test with mock test.
- In product, we can add event message for the specific transaction.
- Need to implement chain immigration methods.
- Need to design IBC transaction according to business requirements.

here is my past demo project to implement automated lottery include integration test. It used old ignite cli.
https://github.com/DedicatedDev/lottery-2
