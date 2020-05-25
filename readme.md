# My Domain Driven Approach

## Controller also none as the Interface Adapter

- (req,res)=>{ -: Route Handler
  const params = req.body or any request type(params,query e.t.c)
- Repository.addOrganization(params) :- Call Use Cases , mainly the Repository
  }

## Use Case termed as the Application Business Rules

### The Use case encapsulates the entities ehich cuts across the data access and Enterprise business rules

- Class Repository{
  constructor(db){
  this.db = db
  }
  static addOrganization(params){ :- Class static Methods
- Service(params) :- Call the business logic inside the static method which ensures validation  
   const query = db.Model.findOne(id: params.id) - The data Access layer
  if( !query){
  save = db.Model.save({id:params.id, name:params.name})
  }  
   }
  }

## Service layer also regarded as the enterprise business logic

- This layer has no access to any dependency and mostly interacts the Use case
- Perform all neccessary business logic here

Notice The variable params was pass around which happens to be a major actor across all layers , better still it can be passed as a reference to another variable too.
