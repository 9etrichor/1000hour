
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model Inspiration
 * 
 */
export type Inspiration = $Result.DefaultSelection<Prisma.$InspirationPayload>
/**
 * Model ArticleInspiration
 * 
 */
export type ArticleInspiration = $Result.DefaultSelection<Prisma.$ArticleInspirationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inspiration`: Exposes CRUD operations for the **Inspiration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inspirations
    * const inspirations = await prisma.inspiration.findMany()
    * ```
    */
  get inspiration(): Prisma.InspirationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleInspiration`: Exposes CRUD operations for the **ArticleInspiration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleInspirations
    * const articleInspirations = await prisma.articleInspiration.findMany()
    * ```
    */
  get articleInspiration(): Prisma.ArticleInspirationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Article: 'Article',
    Inspiration: 'Inspiration',
    ArticleInspiration: 'ArticleInspiration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "article" | "inspiration" | "articleInspiration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      Inspiration: {
        payload: Prisma.$InspirationPayload<ExtArgs>
        fields: Prisma.InspirationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InspirationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InspirationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          findFirst: {
            args: Prisma.InspirationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InspirationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          findMany: {
            args: Prisma.InspirationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>[]
          }
          create: {
            args: Prisma.InspirationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          createMany: {
            args: Prisma.InspirationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InspirationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>[]
          }
          delete: {
            args: Prisma.InspirationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          update: {
            args: Prisma.InspirationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          deleteMany: {
            args: Prisma.InspirationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InspirationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InspirationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>[]
          }
          upsert: {
            args: Prisma.InspirationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InspirationPayload>
          }
          aggregate: {
            args: Prisma.InspirationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInspiration>
          }
          groupBy: {
            args: Prisma.InspirationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InspirationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InspirationCountArgs<ExtArgs>
            result: $Utils.Optional<InspirationCountAggregateOutputType> | number
          }
        }
      }
      ArticleInspiration: {
        payload: Prisma.$ArticleInspirationPayload<ExtArgs>
        fields: Prisma.ArticleInspirationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleInspirationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleInspirationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>
          }
          findFirst: {
            args: Prisma.ArticleInspirationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleInspirationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>
          }
          findMany: {
            args: Prisma.ArticleInspirationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>[]
          }
          create: {
            args: Prisma.ArticleInspirationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>
          }
          createMany: {
            args: Prisma.ArticleInspirationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleInspirationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>[]
          }
          delete: {
            args: Prisma.ArticleInspirationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>
          }
          update: {
            args: Prisma.ArticleInspirationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>
          }
          deleteMany: {
            args: Prisma.ArticleInspirationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleInspirationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleInspirationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>[]
          }
          upsert: {
            args: Prisma.ArticleInspirationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleInspirationPayload>
          }
          aggregate: {
            args: Prisma.ArticleInspirationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleInspiration>
          }
          groupBy: {
            args: Prisma.ArticleInspirationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleInspirationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleInspirationCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleInspirationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    article?: ArticleOmit
    inspiration?: InspirationOmit
    articleInspiration?: ArticleInspirationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    articles: number
    inspirations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | UserCountOutputTypeCountArticlesArgs
    inspirations?: boolean | UserCountOutputTypeCountInspirationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspirationWhereInput
  }


  /**
   * Count Type ArticleCountOutputType
   */

  export type ArticleCountOutputType = {
    inspirations: number
  }

  export type ArticleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inspirations?: boolean | ArticleCountOutputTypeCountInspirationsArgs
  }

  // Custom InputTypes
  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleCountOutputType
     */
    select?: ArticleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticleCountOutputType without action
   */
  export type ArticleCountOutputTypeCountInspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleInspirationWhereInput
  }


  /**
   * Count Type InspirationCountOutputType
   */

  export type InspirationCountOutputType = {
    articles: number
  }

  export type InspirationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | InspirationCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * InspirationCountOutputType without action
   */
  export type InspirationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InspirationCountOutputType
     */
    select?: InspirationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InspirationCountOutputType without action
   */
  export type InspirationCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleInspirationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    articles?: boolean | User$articlesArgs<ExtArgs>
    inspirations?: boolean | User$inspirationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | User$articlesArgs<ExtArgs>
    inspirations?: boolean | User$inspirationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      inspirations: Prisma.$InspirationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends User$articlesArgs<ExtArgs> = {}>(args?: Subset<T, User$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inspirations<T extends User$inspirationsArgs<ExtArgs> = {}>(args?: Subset<T, User$inspirationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.articles
   */
  export type User$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * User.inspirations
   */
  export type User$inspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    where?: InspirationWhereInput
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    cursor?: InspirationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InspirationScalarFieldEnum | InspirationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    title: string
    content: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    inspirations?: boolean | Article$inspirationsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    inspirations?: boolean | Article$inspirationsArgs<ExtArgs>
    _count?: boolean | ArticleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      inspirations: Prisma.$ArticleInspirationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inspirations<T extends Article$inspirationsArgs<ExtArgs> = {}>(args?: Subset<T, Article$inspirationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly content: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
    readonly userId: FieldRef<"Article", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.inspirations
   */
  export type Article$inspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    where?: ArticleInspirationWhereInput
    orderBy?: ArticleInspirationOrderByWithRelationInput | ArticleInspirationOrderByWithRelationInput[]
    cursor?: ArticleInspirationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleInspirationScalarFieldEnum | ArticleInspirationScalarFieldEnum[]
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model Inspiration
   */

  export type AggregateInspiration = {
    _count: InspirationCountAggregateOutputType | null
    _min: InspirationMinAggregateOutputType | null
    _max: InspirationMaxAggregateOutputType | null
  }

  export type InspirationMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type InspirationMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type InspirationCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    userId: number
    _all: number
  }


  export type InspirationMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
  }

  export type InspirationMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
  }

  export type InspirationCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type InspirationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspiration to aggregate.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inspirations
    **/
    _count?: true | InspirationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InspirationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InspirationMaxAggregateInputType
  }

  export type GetInspirationAggregateType<T extends InspirationAggregateArgs> = {
        [P in keyof T & keyof AggregateInspiration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInspiration[P]>
      : GetScalarType<T[P], AggregateInspiration[P]>
  }




  export type InspirationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InspirationWhereInput
    orderBy?: InspirationOrderByWithAggregationInput | InspirationOrderByWithAggregationInput[]
    by: InspirationScalarFieldEnum[] | InspirationScalarFieldEnum
    having?: InspirationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InspirationCountAggregateInputType | true
    _min?: InspirationMinAggregateInputType
    _max?: InspirationMaxAggregateInputType
  }

  export type InspirationGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    userId: string
    _count: InspirationCountAggregateOutputType | null
    _min: InspirationMinAggregateOutputType | null
    _max: InspirationMaxAggregateOutputType | null
  }

  type GetInspirationGroupByPayload<T extends InspirationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InspirationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InspirationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InspirationGroupByOutputType[P]>
            : GetScalarType<T[P], InspirationGroupByOutputType[P]>
        }
      >
    >


  export type InspirationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    articles?: boolean | Inspiration$articlesArgs<ExtArgs>
    _count?: boolean | InspirationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspiration"]>

  export type InspirationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspiration"]>

  export type InspirationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inspiration"]>

  export type InspirationSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type InspirationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "userId", ExtArgs["result"]["inspiration"]>
  export type InspirationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    articles?: boolean | Inspiration$articlesArgs<ExtArgs>
    _count?: boolean | InspirationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InspirationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InspirationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InspirationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inspiration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      articles: Prisma.$ArticleInspirationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["inspiration"]>
    composites: {}
  }

  type InspirationGetPayload<S extends boolean | null | undefined | InspirationDefaultArgs> = $Result.GetResult<Prisma.$InspirationPayload, S>

  type InspirationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InspirationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InspirationCountAggregateInputType | true
    }

  export interface InspirationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inspiration'], meta: { name: 'Inspiration' } }
    /**
     * Find zero or one Inspiration that matches the filter.
     * @param {InspirationFindUniqueArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InspirationFindUniqueArgs>(args: SelectSubset<T, InspirationFindUniqueArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inspiration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InspirationFindUniqueOrThrowArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InspirationFindUniqueOrThrowArgs>(args: SelectSubset<T, InspirationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspiration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationFindFirstArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InspirationFindFirstArgs>(args?: SelectSubset<T, InspirationFindFirstArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inspiration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationFindFirstOrThrowArgs} args - Arguments to find a Inspiration
     * @example
     * // Get one Inspiration
     * const inspiration = await prisma.inspiration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InspirationFindFirstOrThrowArgs>(args?: SelectSubset<T, InspirationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inspirations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inspirations
     * const inspirations = await prisma.inspiration.findMany()
     * 
     * // Get first 10 Inspirations
     * const inspirations = await prisma.inspiration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inspirationWithIdOnly = await prisma.inspiration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InspirationFindManyArgs>(args?: SelectSubset<T, InspirationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inspiration.
     * @param {InspirationCreateArgs} args - Arguments to create a Inspiration.
     * @example
     * // Create one Inspiration
     * const Inspiration = await prisma.inspiration.create({
     *   data: {
     *     // ... data to create a Inspiration
     *   }
     * })
     * 
     */
    create<T extends InspirationCreateArgs>(args: SelectSubset<T, InspirationCreateArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inspirations.
     * @param {InspirationCreateManyArgs} args - Arguments to create many Inspirations.
     * @example
     * // Create many Inspirations
     * const inspiration = await prisma.inspiration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InspirationCreateManyArgs>(args?: SelectSubset<T, InspirationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inspirations and returns the data saved in the database.
     * @param {InspirationCreateManyAndReturnArgs} args - Arguments to create many Inspirations.
     * @example
     * // Create many Inspirations
     * const inspiration = await prisma.inspiration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inspirations and only return the `id`
     * const inspirationWithIdOnly = await prisma.inspiration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InspirationCreateManyAndReturnArgs>(args?: SelectSubset<T, InspirationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inspiration.
     * @param {InspirationDeleteArgs} args - Arguments to delete one Inspiration.
     * @example
     * // Delete one Inspiration
     * const Inspiration = await prisma.inspiration.delete({
     *   where: {
     *     // ... filter to delete one Inspiration
     *   }
     * })
     * 
     */
    delete<T extends InspirationDeleteArgs>(args: SelectSubset<T, InspirationDeleteArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inspiration.
     * @param {InspirationUpdateArgs} args - Arguments to update one Inspiration.
     * @example
     * // Update one Inspiration
     * const inspiration = await prisma.inspiration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InspirationUpdateArgs>(args: SelectSubset<T, InspirationUpdateArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inspirations.
     * @param {InspirationDeleteManyArgs} args - Arguments to filter Inspirations to delete.
     * @example
     * // Delete a few Inspirations
     * const { count } = await prisma.inspiration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InspirationDeleteManyArgs>(args?: SelectSubset<T, InspirationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inspirations
     * const inspiration = await prisma.inspiration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InspirationUpdateManyArgs>(args: SelectSubset<T, InspirationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inspirations and returns the data updated in the database.
     * @param {InspirationUpdateManyAndReturnArgs} args - Arguments to update many Inspirations.
     * @example
     * // Update many Inspirations
     * const inspiration = await prisma.inspiration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inspirations and only return the `id`
     * const inspirationWithIdOnly = await prisma.inspiration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InspirationUpdateManyAndReturnArgs>(args: SelectSubset<T, InspirationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inspiration.
     * @param {InspirationUpsertArgs} args - Arguments to update or create a Inspiration.
     * @example
     * // Update or create a Inspiration
     * const inspiration = await prisma.inspiration.upsert({
     *   create: {
     *     // ... data to create a Inspiration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inspiration we want to update
     *   }
     * })
     */
    upsert<T extends InspirationUpsertArgs>(args: SelectSubset<T, InspirationUpsertArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationCountArgs} args - Arguments to filter Inspirations to count.
     * @example
     * // Count the number of Inspirations
     * const count = await prisma.inspiration.count({
     *   where: {
     *     // ... the filter for the Inspirations we want to count
     *   }
     * })
    **/
    count<T extends InspirationCountArgs>(
      args?: Subset<T, InspirationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InspirationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InspirationAggregateArgs>(args: Subset<T, InspirationAggregateArgs>): Prisma.PrismaPromise<GetInspirationAggregateType<T>>

    /**
     * Group by Inspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InspirationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InspirationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InspirationGroupByArgs['orderBy'] }
        : { orderBy?: InspirationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InspirationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInspirationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inspiration model
   */
  readonly fields: InspirationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inspiration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InspirationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articles<T extends Inspiration$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Inspiration$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inspiration model
   */
  interface InspirationFieldRefs {
    readonly id: FieldRef<"Inspiration", 'String'>
    readonly content: FieldRef<"Inspiration", 'String'>
    readonly createdAt: FieldRef<"Inspiration", 'DateTime'>
    readonly userId: FieldRef<"Inspiration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Inspiration findUnique
   */
  export type InspirationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration findUniqueOrThrow
   */
  export type InspirationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration findFirst
   */
  export type InspirationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspirations.
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspirations.
     */
    distinct?: InspirationScalarFieldEnum | InspirationScalarFieldEnum[]
  }

  /**
   * Inspiration findFirstOrThrow
   */
  export type InspirationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * Filter, which Inspiration to fetch.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inspirations.
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspirations.
     */
    distinct?: InspirationScalarFieldEnum | InspirationScalarFieldEnum[]
  }

  /**
   * Inspiration findMany
   */
  export type InspirationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * Filter, which Inspirations to fetch.
     */
    where?: InspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inspirations to fetch.
     */
    orderBy?: InspirationOrderByWithRelationInput | InspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inspirations.
     */
    cursor?: InspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inspirations.
     */
    distinct?: InspirationScalarFieldEnum | InspirationScalarFieldEnum[]
  }

  /**
   * Inspiration create
   */
  export type InspirationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * The data needed to create a Inspiration.
     */
    data: XOR<InspirationCreateInput, InspirationUncheckedCreateInput>
  }

  /**
   * Inspiration createMany
   */
  export type InspirationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inspirations.
     */
    data: InspirationCreateManyInput | InspirationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inspiration createManyAndReturn
   */
  export type InspirationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * The data used to create many Inspirations.
     */
    data: InspirationCreateManyInput | InspirationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inspiration update
   */
  export type InspirationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * The data needed to update a Inspiration.
     */
    data: XOR<InspirationUpdateInput, InspirationUncheckedUpdateInput>
    /**
     * Choose, which Inspiration to update.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration updateMany
   */
  export type InspirationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inspirations.
     */
    data: XOR<InspirationUpdateManyMutationInput, InspirationUncheckedUpdateManyInput>
    /**
     * Filter which Inspirations to update
     */
    where?: InspirationWhereInput
    /**
     * Limit how many Inspirations to update.
     */
    limit?: number
  }

  /**
   * Inspiration updateManyAndReturn
   */
  export type InspirationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * The data used to update Inspirations.
     */
    data: XOR<InspirationUpdateManyMutationInput, InspirationUncheckedUpdateManyInput>
    /**
     * Filter which Inspirations to update
     */
    where?: InspirationWhereInput
    /**
     * Limit how many Inspirations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inspiration upsert
   */
  export type InspirationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * The filter to search for the Inspiration to update in case it exists.
     */
    where: InspirationWhereUniqueInput
    /**
     * In case the Inspiration found by the `where` argument doesn't exist, create a new Inspiration with this data.
     */
    create: XOR<InspirationCreateInput, InspirationUncheckedCreateInput>
    /**
     * In case the Inspiration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InspirationUpdateInput, InspirationUncheckedUpdateInput>
  }

  /**
   * Inspiration delete
   */
  export type InspirationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
    /**
     * Filter which Inspiration to delete.
     */
    where: InspirationWhereUniqueInput
  }

  /**
   * Inspiration deleteMany
   */
  export type InspirationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inspirations to delete
     */
    where?: InspirationWhereInput
    /**
     * Limit how many Inspirations to delete.
     */
    limit?: number
  }

  /**
   * Inspiration.articles
   */
  export type Inspiration$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    where?: ArticleInspirationWhereInput
    orderBy?: ArticleInspirationOrderByWithRelationInput | ArticleInspirationOrderByWithRelationInput[]
    cursor?: ArticleInspirationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleInspirationScalarFieldEnum | ArticleInspirationScalarFieldEnum[]
  }

  /**
   * Inspiration without action
   */
  export type InspirationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inspiration
     */
    select?: InspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inspiration
     */
    omit?: InspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InspirationInclude<ExtArgs> | null
  }


  /**
   * Model ArticleInspiration
   */

  export type AggregateArticleInspiration = {
    _count: ArticleInspirationCountAggregateOutputType | null
    _min: ArticleInspirationMinAggregateOutputType | null
    _max: ArticleInspirationMaxAggregateOutputType | null
  }

  export type ArticleInspirationMinAggregateOutputType = {
    articleId: string | null
    inspirationId: string | null
  }

  export type ArticleInspirationMaxAggregateOutputType = {
    articleId: string | null
    inspirationId: string | null
  }

  export type ArticleInspirationCountAggregateOutputType = {
    articleId: number
    inspirationId: number
    _all: number
  }


  export type ArticleInspirationMinAggregateInputType = {
    articleId?: true
    inspirationId?: true
  }

  export type ArticleInspirationMaxAggregateInputType = {
    articleId?: true
    inspirationId?: true
  }

  export type ArticleInspirationCountAggregateInputType = {
    articleId?: true
    inspirationId?: true
    _all?: true
  }

  export type ArticleInspirationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleInspiration to aggregate.
     */
    where?: ArticleInspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInspirations to fetch.
     */
    orderBy?: ArticleInspirationOrderByWithRelationInput | ArticleInspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleInspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleInspirations
    **/
    _count?: true | ArticleInspirationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleInspirationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleInspirationMaxAggregateInputType
  }

  export type GetArticleInspirationAggregateType<T extends ArticleInspirationAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleInspiration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleInspiration[P]>
      : GetScalarType<T[P], AggregateArticleInspiration[P]>
  }




  export type ArticleInspirationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleInspirationWhereInput
    orderBy?: ArticleInspirationOrderByWithAggregationInput | ArticleInspirationOrderByWithAggregationInput[]
    by: ArticleInspirationScalarFieldEnum[] | ArticleInspirationScalarFieldEnum
    having?: ArticleInspirationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleInspirationCountAggregateInputType | true
    _min?: ArticleInspirationMinAggregateInputType
    _max?: ArticleInspirationMaxAggregateInputType
  }

  export type ArticleInspirationGroupByOutputType = {
    articleId: string
    inspirationId: string
    _count: ArticleInspirationCountAggregateOutputType | null
    _min: ArticleInspirationMinAggregateOutputType | null
    _max: ArticleInspirationMaxAggregateOutputType | null
  }

  type GetArticleInspirationGroupByPayload<T extends ArticleInspirationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleInspirationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleInspirationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleInspirationGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleInspirationGroupByOutputType[P]>
        }
      >
    >


  export type ArticleInspirationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    inspirationId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    inspiration?: boolean | InspirationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleInspiration"]>

  export type ArticleInspirationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    inspirationId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    inspiration?: boolean | InspirationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleInspiration"]>

  export type ArticleInspirationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articleId?: boolean
    inspirationId?: boolean
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    inspiration?: boolean | InspirationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleInspiration"]>

  export type ArticleInspirationSelectScalar = {
    articleId?: boolean
    inspirationId?: boolean
  }

  export type ArticleInspirationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articleId" | "inspirationId", ExtArgs["result"]["articleInspiration"]>
  export type ArticleInspirationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    inspiration?: boolean | InspirationDefaultArgs<ExtArgs>
  }
  export type ArticleInspirationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    inspiration?: boolean | InspirationDefaultArgs<ExtArgs>
  }
  export type ArticleInspirationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | ArticleDefaultArgs<ExtArgs>
    inspiration?: boolean | InspirationDefaultArgs<ExtArgs>
  }

  export type $ArticleInspirationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleInspiration"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs>
      inspiration: Prisma.$InspirationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articleId: string
      inspirationId: string
    }, ExtArgs["result"]["articleInspiration"]>
    composites: {}
  }

  type ArticleInspirationGetPayload<S extends boolean | null | undefined | ArticleInspirationDefaultArgs> = $Result.GetResult<Prisma.$ArticleInspirationPayload, S>

  type ArticleInspirationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleInspirationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleInspirationCountAggregateInputType | true
    }

  export interface ArticleInspirationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleInspiration'], meta: { name: 'ArticleInspiration' } }
    /**
     * Find zero or one ArticleInspiration that matches the filter.
     * @param {ArticleInspirationFindUniqueArgs} args - Arguments to find a ArticleInspiration
     * @example
     * // Get one ArticleInspiration
     * const articleInspiration = await prisma.articleInspiration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleInspirationFindUniqueArgs>(args: SelectSubset<T, ArticleInspirationFindUniqueArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleInspiration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleInspirationFindUniqueOrThrowArgs} args - Arguments to find a ArticleInspiration
     * @example
     * // Get one ArticleInspiration
     * const articleInspiration = await prisma.articleInspiration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleInspirationFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleInspirationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleInspiration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInspirationFindFirstArgs} args - Arguments to find a ArticleInspiration
     * @example
     * // Get one ArticleInspiration
     * const articleInspiration = await prisma.articleInspiration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleInspirationFindFirstArgs>(args?: SelectSubset<T, ArticleInspirationFindFirstArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleInspiration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInspirationFindFirstOrThrowArgs} args - Arguments to find a ArticleInspiration
     * @example
     * // Get one ArticleInspiration
     * const articleInspiration = await prisma.articleInspiration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleInspirationFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleInspirationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleInspirations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInspirationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleInspirations
     * const articleInspirations = await prisma.articleInspiration.findMany()
     * 
     * // Get first 10 ArticleInspirations
     * const articleInspirations = await prisma.articleInspiration.findMany({ take: 10 })
     * 
     * // Only select the `articleId`
     * const articleInspirationWithArticleIdOnly = await prisma.articleInspiration.findMany({ select: { articleId: true } })
     * 
     */
    findMany<T extends ArticleInspirationFindManyArgs>(args?: SelectSubset<T, ArticleInspirationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleInspiration.
     * @param {ArticleInspirationCreateArgs} args - Arguments to create a ArticleInspiration.
     * @example
     * // Create one ArticleInspiration
     * const ArticleInspiration = await prisma.articleInspiration.create({
     *   data: {
     *     // ... data to create a ArticleInspiration
     *   }
     * })
     * 
     */
    create<T extends ArticleInspirationCreateArgs>(args: SelectSubset<T, ArticleInspirationCreateArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleInspirations.
     * @param {ArticleInspirationCreateManyArgs} args - Arguments to create many ArticleInspirations.
     * @example
     * // Create many ArticleInspirations
     * const articleInspiration = await prisma.articleInspiration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleInspirationCreateManyArgs>(args?: SelectSubset<T, ArticleInspirationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleInspirations and returns the data saved in the database.
     * @param {ArticleInspirationCreateManyAndReturnArgs} args - Arguments to create many ArticleInspirations.
     * @example
     * // Create many ArticleInspirations
     * const articleInspiration = await prisma.articleInspiration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleInspirations and only return the `articleId`
     * const articleInspirationWithArticleIdOnly = await prisma.articleInspiration.createManyAndReturn({
     *   select: { articleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleInspirationCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleInspirationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleInspiration.
     * @param {ArticleInspirationDeleteArgs} args - Arguments to delete one ArticleInspiration.
     * @example
     * // Delete one ArticleInspiration
     * const ArticleInspiration = await prisma.articleInspiration.delete({
     *   where: {
     *     // ... filter to delete one ArticleInspiration
     *   }
     * })
     * 
     */
    delete<T extends ArticleInspirationDeleteArgs>(args: SelectSubset<T, ArticleInspirationDeleteArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleInspiration.
     * @param {ArticleInspirationUpdateArgs} args - Arguments to update one ArticleInspiration.
     * @example
     * // Update one ArticleInspiration
     * const articleInspiration = await prisma.articleInspiration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleInspirationUpdateArgs>(args: SelectSubset<T, ArticleInspirationUpdateArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleInspirations.
     * @param {ArticleInspirationDeleteManyArgs} args - Arguments to filter ArticleInspirations to delete.
     * @example
     * // Delete a few ArticleInspirations
     * const { count } = await prisma.articleInspiration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleInspirationDeleteManyArgs>(args?: SelectSubset<T, ArticleInspirationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleInspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInspirationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleInspirations
     * const articleInspiration = await prisma.articleInspiration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleInspirationUpdateManyArgs>(args: SelectSubset<T, ArticleInspirationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleInspirations and returns the data updated in the database.
     * @param {ArticleInspirationUpdateManyAndReturnArgs} args - Arguments to update many ArticleInspirations.
     * @example
     * // Update many ArticleInspirations
     * const articleInspiration = await prisma.articleInspiration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleInspirations and only return the `articleId`
     * const articleInspirationWithArticleIdOnly = await prisma.articleInspiration.updateManyAndReturn({
     *   select: { articleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleInspirationUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleInspirationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleInspiration.
     * @param {ArticleInspirationUpsertArgs} args - Arguments to update or create a ArticleInspiration.
     * @example
     * // Update or create a ArticleInspiration
     * const articleInspiration = await prisma.articleInspiration.upsert({
     *   create: {
     *     // ... data to create a ArticleInspiration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleInspiration we want to update
     *   }
     * })
     */
    upsert<T extends ArticleInspirationUpsertArgs>(args: SelectSubset<T, ArticleInspirationUpsertArgs<ExtArgs>>): Prisma__ArticleInspirationClient<$Result.GetResult<Prisma.$ArticleInspirationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleInspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInspirationCountArgs} args - Arguments to filter ArticleInspirations to count.
     * @example
     * // Count the number of ArticleInspirations
     * const count = await prisma.articleInspiration.count({
     *   where: {
     *     // ... the filter for the ArticleInspirations we want to count
     *   }
     * })
    **/
    count<T extends ArticleInspirationCountArgs>(
      args?: Subset<T, ArticleInspirationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleInspirationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleInspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInspirationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleInspirationAggregateArgs>(args: Subset<T, ArticleInspirationAggregateArgs>): Prisma.PrismaPromise<GetArticleInspirationAggregateType<T>>

    /**
     * Group by ArticleInspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleInspirationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleInspirationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleInspirationGroupByArgs['orderBy'] }
        : { orderBy?: ArticleInspirationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleInspirationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleInspirationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleInspiration model
   */
  readonly fields: ArticleInspirationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleInspiration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleInspirationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends ArticleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticleDefaultArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inspiration<T extends InspirationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InspirationDefaultArgs<ExtArgs>>): Prisma__InspirationClient<$Result.GetResult<Prisma.$InspirationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleInspiration model
   */
  interface ArticleInspirationFieldRefs {
    readonly articleId: FieldRef<"ArticleInspiration", 'String'>
    readonly inspirationId: FieldRef<"ArticleInspiration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArticleInspiration findUnique
   */
  export type ArticleInspirationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInspiration to fetch.
     */
    where: ArticleInspirationWhereUniqueInput
  }

  /**
   * ArticleInspiration findUniqueOrThrow
   */
  export type ArticleInspirationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInspiration to fetch.
     */
    where: ArticleInspirationWhereUniqueInput
  }

  /**
   * ArticleInspiration findFirst
   */
  export type ArticleInspirationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInspiration to fetch.
     */
    where?: ArticleInspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInspirations to fetch.
     */
    orderBy?: ArticleInspirationOrderByWithRelationInput | ArticleInspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleInspirations.
     */
    cursor?: ArticleInspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleInspirations.
     */
    distinct?: ArticleInspirationScalarFieldEnum | ArticleInspirationScalarFieldEnum[]
  }

  /**
   * ArticleInspiration findFirstOrThrow
   */
  export type ArticleInspirationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInspiration to fetch.
     */
    where?: ArticleInspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInspirations to fetch.
     */
    orderBy?: ArticleInspirationOrderByWithRelationInput | ArticleInspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleInspirations.
     */
    cursor?: ArticleInspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleInspirations.
     */
    distinct?: ArticleInspirationScalarFieldEnum | ArticleInspirationScalarFieldEnum[]
  }

  /**
   * ArticleInspiration findMany
   */
  export type ArticleInspirationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * Filter, which ArticleInspirations to fetch.
     */
    where?: ArticleInspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleInspirations to fetch.
     */
    orderBy?: ArticleInspirationOrderByWithRelationInput | ArticleInspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleInspirations.
     */
    cursor?: ArticleInspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleInspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleInspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleInspirations.
     */
    distinct?: ArticleInspirationScalarFieldEnum | ArticleInspirationScalarFieldEnum[]
  }

  /**
   * ArticleInspiration create
   */
  export type ArticleInspirationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleInspiration.
     */
    data: XOR<ArticleInspirationCreateInput, ArticleInspirationUncheckedCreateInput>
  }

  /**
   * ArticleInspiration createMany
   */
  export type ArticleInspirationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleInspirations.
     */
    data: ArticleInspirationCreateManyInput | ArticleInspirationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleInspiration createManyAndReturn
   */
  export type ArticleInspirationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleInspirations.
     */
    data: ArticleInspirationCreateManyInput | ArticleInspirationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleInspiration update
   */
  export type ArticleInspirationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleInspiration.
     */
    data: XOR<ArticleInspirationUpdateInput, ArticleInspirationUncheckedUpdateInput>
    /**
     * Choose, which ArticleInspiration to update.
     */
    where: ArticleInspirationWhereUniqueInput
  }

  /**
   * ArticleInspiration updateMany
   */
  export type ArticleInspirationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleInspirations.
     */
    data: XOR<ArticleInspirationUpdateManyMutationInput, ArticleInspirationUncheckedUpdateManyInput>
    /**
     * Filter which ArticleInspirations to update
     */
    where?: ArticleInspirationWhereInput
    /**
     * Limit how many ArticleInspirations to update.
     */
    limit?: number
  }

  /**
   * ArticleInspiration updateManyAndReturn
   */
  export type ArticleInspirationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * The data used to update ArticleInspirations.
     */
    data: XOR<ArticleInspirationUpdateManyMutationInput, ArticleInspirationUncheckedUpdateManyInput>
    /**
     * Filter which ArticleInspirations to update
     */
    where?: ArticleInspirationWhereInput
    /**
     * Limit how many ArticleInspirations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleInspiration upsert
   */
  export type ArticleInspirationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleInspiration to update in case it exists.
     */
    where: ArticleInspirationWhereUniqueInput
    /**
     * In case the ArticleInspiration found by the `where` argument doesn't exist, create a new ArticleInspiration with this data.
     */
    create: XOR<ArticleInspirationCreateInput, ArticleInspirationUncheckedCreateInput>
    /**
     * In case the ArticleInspiration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleInspirationUpdateInput, ArticleInspirationUncheckedUpdateInput>
  }

  /**
   * ArticleInspiration delete
   */
  export type ArticleInspirationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
    /**
     * Filter which ArticleInspiration to delete.
     */
    where: ArticleInspirationWhereUniqueInput
  }

  /**
   * ArticleInspiration deleteMany
   */
  export type ArticleInspirationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleInspirations to delete
     */
    where?: ArticleInspirationWhereInput
    /**
     * Limit how many ArticleInspirations to delete.
     */
    limit?: number
  }

  /**
   * ArticleInspiration without action
   */
  export type ArticleInspirationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleInspiration
     */
    select?: ArticleInspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleInspiration
     */
    omit?: ArticleInspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInspirationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const InspirationScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type InspirationScalarFieldEnum = (typeof InspirationScalarFieldEnum)[keyof typeof InspirationScalarFieldEnum]


  export const ArticleInspirationScalarFieldEnum: {
    articleId: 'articleId',
    inspirationId: 'inspirationId'
  };

  export type ArticleInspirationScalarFieldEnum = (typeof ArticleInspirationScalarFieldEnum)[keyof typeof ArticleInspirationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    articles?: ArticleListRelationFilter
    inspirations?: InspirationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    inspirations?: InspirationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    articles?: ArticleListRelationFilter
    inspirations?: InspirationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    userId?: StringFilter<"Article"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inspirations?: ArticleInspirationListRelationFilter
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    inspirations?: ArticleInspirationOrderByRelationAggregateInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    userId?: StringFilter<"Article"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inspirations?: ArticleInspirationListRelationFilter
  }, "id">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    content?: StringWithAggregatesFilter<"Article"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    userId?: StringWithAggregatesFilter<"Article"> | string
  }

  export type InspirationWhereInput = {
    AND?: InspirationWhereInput | InspirationWhereInput[]
    OR?: InspirationWhereInput[]
    NOT?: InspirationWhereInput | InspirationWhereInput[]
    id?: StringFilter<"Inspiration"> | string
    content?: StringFilter<"Inspiration"> | string
    createdAt?: DateTimeFilter<"Inspiration"> | Date | string
    userId?: StringFilter<"Inspiration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articles?: ArticleInspirationListRelationFilter
  }

  export type InspirationOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    articles?: ArticleInspirationOrderByRelationAggregateInput
  }

  export type InspirationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InspirationWhereInput | InspirationWhereInput[]
    OR?: InspirationWhereInput[]
    NOT?: InspirationWhereInput | InspirationWhereInput[]
    content?: StringFilter<"Inspiration"> | string
    createdAt?: DateTimeFilter<"Inspiration"> | Date | string
    userId?: StringFilter<"Inspiration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    articles?: ArticleInspirationListRelationFilter
  }, "id">

  export type InspirationOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: InspirationCountOrderByAggregateInput
    _max?: InspirationMaxOrderByAggregateInput
    _min?: InspirationMinOrderByAggregateInput
  }

  export type InspirationScalarWhereWithAggregatesInput = {
    AND?: InspirationScalarWhereWithAggregatesInput | InspirationScalarWhereWithAggregatesInput[]
    OR?: InspirationScalarWhereWithAggregatesInput[]
    NOT?: InspirationScalarWhereWithAggregatesInput | InspirationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inspiration"> | string
    content?: StringWithAggregatesFilter<"Inspiration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Inspiration"> | Date | string
    userId?: StringWithAggregatesFilter<"Inspiration"> | string
  }

  export type ArticleInspirationWhereInput = {
    AND?: ArticleInspirationWhereInput | ArticleInspirationWhereInput[]
    OR?: ArticleInspirationWhereInput[]
    NOT?: ArticleInspirationWhereInput | ArticleInspirationWhereInput[]
    articleId?: StringFilter<"ArticleInspiration"> | string
    inspirationId?: StringFilter<"ArticleInspiration"> | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    inspiration?: XOR<InspirationScalarRelationFilter, InspirationWhereInput>
  }

  export type ArticleInspirationOrderByWithRelationInput = {
    articleId?: SortOrder
    inspirationId?: SortOrder
    article?: ArticleOrderByWithRelationInput
    inspiration?: InspirationOrderByWithRelationInput
  }

  export type ArticleInspirationWhereUniqueInput = Prisma.AtLeast<{
    articleId_inspirationId?: ArticleInspirationArticleIdInspirationIdCompoundUniqueInput
    AND?: ArticleInspirationWhereInput | ArticleInspirationWhereInput[]
    OR?: ArticleInspirationWhereInput[]
    NOT?: ArticleInspirationWhereInput | ArticleInspirationWhereInput[]
    articleId?: StringFilter<"ArticleInspiration"> | string
    inspirationId?: StringFilter<"ArticleInspiration"> | string
    article?: XOR<ArticleScalarRelationFilter, ArticleWhereInput>
    inspiration?: XOR<InspirationScalarRelationFilter, InspirationWhereInput>
  }, "articleId_inspirationId">

  export type ArticleInspirationOrderByWithAggregationInput = {
    articleId?: SortOrder
    inspirationId?: SortOrder
    _count?: ArticleInspirationCountOrderByAggregateInput
    _max?: ArticleInspirationMaxOrderByAggregateInput
    _min?: ArticleInspirationMinOrderByAggregateInput
  }

  export type ArticleInspirationScalarWhereWithAggregatesInput = {
    AND?: ArticleInspirationScalarWhereWithAggregatesInput | ArticleInspirationScalarWhereWithAggregatesInput[]
    OR?: ArticleInspirationScalarWhereWithAggregatesInput[]
    NOT?: ArticleInspirationScalarWhereWithAggregatesInput | ArticleInspirationScalarWhereWithAggregatesInput[]
    articleId?: StringWithAggregatesFilter<"ArticleInspiration"> | string
    inspirationId?: StringWithAggregatesFilter<"ArticleInspiration"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
    inspirations?: InspirationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
    inspirations?: InspirationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
    inspirations?: InspirationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
    inspirations?: InspirationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticlesInput
    inspirations?: ArticleInspirationCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    inspirations?: ArticleInspirationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
    inspirations?: ArticleInspirationUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    inspirations?: ArticleInspirationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InspirationCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInspirationsInput
    articles?: ArticleInspirationCreateNestedManyWithoutInspirationInput
  }

  export type InspirationUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    articles?: ArticleInspirationUncheckedCreateNestedManyWithoutInspirationInput
  }

  export type InspirationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInspirationsNestedInput
    articles?: ArticleInspirationUpdateManyWithoutInspirationNestedInput
  }

  export type InspirationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    articles?: ArticleInspirationUncheckedUpdateManyWithoutInspirationNestedInput
  }

  export type InspirationCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type InspirationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspirationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleInspirationCreateInput = {
    article: ArticleCreateNestedOneWithoutInspirationsInput
    inspiration: InspirationCreateNestedOneWithoutArticlesInput
  }

  export type ArticleInspirationUncheckedCreateInput = {
    articleId: string
    inspirationId: string
  }

  export type ArticleInspirationUpdateInput = {
    article?: ArticleUpdateOneRequiredWithoutInspirationsNestedInput
    inspiration?: InspirationUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleInspirationUncheckedUpdateInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    inspirationId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleInspirationCreateManyInput = {
    articleId: string
    inspirationId: string
  }

  export type ArticleInspirationUpdateManyMutationInput = {

  }

  export type ArticleInspirationUncheckedUpdateManyInput = {
    articleId?: StringFieldUpdateOperationsInput | string
    inspirationId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type InspirationListRelationFilter = {
    every?: InspirationWhereInput
    some?: InspirationWhereInput
    none?: InspirationWhereInput
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InspirationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ArticleInspirationListRelationFilter = {
    every?: ArticleInspirationWhereInput
    some?: ArticleInspirationWhereInput
    none?: ArticleInspirationWhereInput
  }

  export type ArticleInspirationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type InspirationCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type InspirationMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type InspirationMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ArticleScalarRelationFilter = {
    is?: ArticleWhereInput
    isNot?: ArticleWhereInput
  }

  export type InspirationScalarRelationFilter = {
    is?: InspirationWhereInput
    isNot?: InspirationWhereInput
  }

  export type ArticleInspirationArticleIdInspirationIdCompoundUniqueInput = {
    articleId: string
    inspirationId: string
  }

  export type ArticleInspirationCountOrderByAggregateInput = {
    articleId?: SortOrder
    inspirationId?: SortOrder
  }

  export type ArticleInspirationMaxOrderByAggregateInput = {
    articleId?: SortOrder
    inspirationId?: SortOrder
  }

  export type ArticleInspirationMinOrderByAggregateInput = {
    articleId?: SortOrder
    inspirationId?: SortOrder
  }

  export type ArticleCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type InspirationCreateNestedManyWithoutUserInput = {
    create?: XOR<InspirationCreateWithoutUserInput, InspirationUncheckedCreateWithoutUserInput> | InspirationCreateWithoutUserInput[] | InspirationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InspirationCreateOrConnectWithoutUserInput | InspirationCreateOrConnectWithoutUserInput[]
    createMany?: InspirationCreateManyUserInputEnvelope
    connect?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type InspirationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InspirationCreateWithoutUserInput, InspirationUncheckedCreateWithoutUserInput> | InspirationCreateWithoutUserInput[] | InspirationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InspirationCreateOrConnectWithoutUserInput | InspirationCreateOrConnectWithoutUserInput[]
    createMany?: InspirationCreateManyUserInputEnvelope
    connect?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticleUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type InspirationUpdateManyWithoutUserNestedInput = {
    create?: XOR<InspirationCreateWithoutUserInput, InspirationUncheckedCreateWithoutUserInput> | InspirationCreateWithoutUserInput[] | InspirationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InspirationCreateOrConnectWithoutUserInput | InspirationCreateOrConnectWithoutUserInput[]
    upsert?: InspirationUpsertWithWhereUniqueWithoutUserInput | InspirationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InspirationCreateManyUserInputEnvelope
    set?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    disconnect?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    delete?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    connect?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    update?: InspirationUpdateWithWhereUniqueWithoutUserInput | InspirationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InspirationUpdateManyWithWhereWithoutUserInput | InspirationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InspirationScalarWhereInput | InspirationScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput> | ArticleCreateWithoutUserInput[] | ArticleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutUserInput | ArticleCreateOrConnectWithoutUserInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutUserInput | ArticleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleCreateManyUserInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutUserInput | ArticleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutUserInput | ArticleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type InspirationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InspirationCreateWithoutUserInput, InspirationUncheckedCreateWithoutUserInput> | InspirationCreateWithoutUserInput[] | InspirationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InspirationCreateOrConnectWithoutUserInput | InspirationCreateOrConnectWithoutUserInput[]
    upsert?: InspirationUpsertWithWhereUniqueWithoutUserInput | InspirationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InspirationCreateManyUserInputEnvelope
    set?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    disconnect?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    delete?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    connect?: InspirationWhereUniqueInput | InspirationWhereUniqueInput[]
    update?: InspirationUpdateWithWhereUniqueWithoutUserInput | InspirationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InspirationUpdateManyWithWhereWithoutUserInput | InspirationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InspirationScalarWhereInput | InspirationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleInspirationCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleInspirationCreateWithoutArticleInput, ArticleInspirationUncheckedCreateWithoutArticleInput> | ArticleInspirationCreateWithoutArticleInput[] | ArticleInspirationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutArticleInput | ArticleInspirationCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleInspirationCreateManyArticleInputEnvelope
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
  }

  export type ArticleInspirationUncheckedCreateNestedManyWithoutArticleInput = {
    create?: XOR<ArticleInspirationCreateWithoutArticleInput, ArticleInspirationUncheckedCreateWithoutArticleInput> | ArticleInspirationCreateWithoutArticleInput[] | ArticleInspirationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutArticleInput | ArticleInspirationCreateOrConnectWithoutArticleInput[]
    createMany?: ArticleInspirationCreateManyArticleInputEnvelope
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleInspirationUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleInspirationCreateWithoutArticleInput, ArticleInspirationUncheckedCreateWithoutArticleInput> | ArticleInspirationCreateWithoutArticleInput[] | ArticleInspirationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutArticleInput | ArticleInspirationCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleInspirationUpsertWithWhereUniqueWithoutArticleInput | ArticleInspirationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleInspirationCreateManyArticleInputEnvelope
    set?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    disconnect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    delete?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    update?: ArticleInspirationUpdateWithWhereUniqueWithoutArticleInput | ArticleInspirationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleInspirationUpdateManyWithWhereWithoutArticleInput | ArticleInspirationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleInspirationScalarWhereInput | ArticleInspirationScalarWhereInput[]
  }

  export type ArticleInspirationUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: XOR<ArticleInspirationCreateWithoutArticleInput, ArticleInspirationUncheckedCreateWithoutArticleInput> | ArticleInspirationCreateWithoutArticleInput[] | ArticleInspirationUncheckedCreateWithoutArticleInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutArticleInput | ArticleInspirationCreateOrConnectWithoutArticleInput[]
    upsert?: ArticleInspirationUpsertWithWhereUniqueWithoutArticleInput | ArticleInspirationUpsertWithWhereUniqueWithoutArticleInput[]
    createMany?: ArticleInspirationCreateManyArticleInputEnvelope
    set?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    disconnect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    delete?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    update?: ArticleInspirationUpdateWithWhereUniqueWithoutArticleInput | ArticleInspirationUpdateWithWhereUniqueWithoutArticleInput[]
    updateMany?: ArticleInspirationUpdateManyWithWhereWithoutArticleInput | ArticleInspirationUpdateManyWithWhereWithoutArticleInput[]
    deleteMany?: ArticleInspirationScalarWhereInput | ArticleInspirationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInspirationsInput = {
    create?: XOR<UserCreateWithoutInspirationsInput, UserUncheckedCreateWithoutInspirationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInspirationsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticleInspirationCreateNestedManyWithoutInspirationInput = {
    create?: XOR<ArticleInspirationCreateWithoutInspirationInput, ArticleInspirationUncheckedCreateWithoutInspirationInput> | ArticleInspirationCreateWithoutInspirationInput[] | ArticleInspirationUncheckedCreateWithoutInspirationInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutInspirationInput | ArticleInspirationCreateOrConnectWithoutInspirationInput[]
    createMany?: ArticleInspirationCreateManyInspirationInputEnvelope
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
  }

  export type ArticleInspirationUncheckedCreateNestedManyWithoutInspirationInput = {
    create?: XOR<ArticleInspirationCreateWithoutInspirationInput, ArticleInspirationUncheckedCreateWithoutInspirationInput> | ArticleInspirationCreateWithoutInspirationInput[] | ArticleInspirationUncheckedCreateWithoutInspirationInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutInspirationInput | ArticleInspirationCreateOrConnectWithoutInspirationInput[]
    createMany?: ArticleInspirationCreateManyInspirationInputEnvelope
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInspirationsNestedInput = {
    create?: XOR<UserCreateWithoutInspirationsInput, UserUncheckedCreateWithoutInspirationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInspirationsInput
    upsert?: UserUpsertWithoutInspirationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInspirationsInput, UserUpdateWithoutInspirationsInput>, UserUncheckedUpdateWithoutInspirationsInput>
  }

  export type ArticleInspirationUpdateManyWithoutInspirationNestedInput = {
    create?: XOR<ArticleInspirationCreateWithoutInspirationInput, ArticleInspirationUncheckedCreateWithoutInspirationInput> | ArticleInspirationCreateWithoutInspirationInput[] | ArticleInspirationUncheckedCreateWithoutInspirationInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutInspirationInput | ArticleInspirationCreateOrConnectWithoutInspirationInput[]
    upsert?: ArticleInspirationUpsertWithWhereUniqueWithoutInspirationInput | ArticleInspirationUpsertWithWhereUniqueWithoutInspirationInput[]
    createMany?: ArticleInspirationCreateManyInspirationInputEnvelope
    set?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    disconnect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    delete?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    update?: ArticleInspirationUpdateWithWhereUniqueWithoutInspirationInput | ArticleInspirationUpdateWithWhereUniqueWithoutInspirationInput[]
    updateMany?: ArticleInspirationUpdateManyWithWhereWithoutInspirationInput | ArticleInspirationUpdateManyWithWhereWithoutInspirationInput[]
    deleteMany?: ArticleInspirationScalarWhereInput | ArticleInspirationScalarWhereInput[]
  }

  export type ArticleInspirationUncheckedUpdateManyWithoutInspirationNestedInput = {
    create?: XOR<ArticleInspirationCreateWithoutInspirationInput, ArticleInspirationUncheckedCreateWithoutInspirationInput> | ArticleInspirationCreateWithoutInspirationInput[] | ArticleInspirationUncheckedCreateWithoutInspirationInput[]
    connectOrCreate?: ArticleInspirationCreateOrConnectWithoutInspirationInput | ArticleInspirationCreateOrConnectWithoutInspirationInput[]
    upsert?: ArticleInspirationUpsertWithWhereUniqueWithoutInspirationInput | ArticleInspirationUpsertWithWhereUniqueWithoutInspirationInput[]
    createMany?: ArticleInspirationCreateManyInspirationInputEnvelope
    set?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    disconnect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    delete?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    connect?: ArticleInspirationWhereUniqueInput | ArticleInspirationWhereUniqueInput[]
    update?: ArticleInspirationUpdateWithWhereUniqueWithoutInspirationInput | ArticleInspirationUpdateWithWhereUniqueWithoutInspirationInput[]
    updateMany?: ArticleInspirationUpdateManyWithWhereWithoutInspirationInput | ArticleInspirationUpdateManyWithWhereWithoutInspirationInput[]
    deleteMany?: ArticleInspirationScalarWhereInput | ArticleInspirationScalarWhereInput[]
  }

  export type ArticleCreateNestedOneWithoutInspirationsInput = {
    create?: XOR<ArticleCreateWithoutInspirationsInput, ArticleUncheckedCreateWithoutInspirationsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutInspirationsInput
    connect?: ArticleWhereUniqueInput
  }

  export type InspirationCreateNestedOneWithoutArticlesInput = {
    create?: XOR<InspirationCreateWithoutArticlesInput, InspirationUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: InspirationCreateOrConnectWithoutArticlesInput
    connect?: InspirationWhereUniqueInput
  }

  export type ArticleUpdateOneRequiredWithoutInspirationsNestedInput = {
    create?: XOR<ArticleCreateWithoutInspirationsInput, ArticleUncheckedCreateWithoutInspirationsInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutInspirationsInput
    upsert?: ArticleUpsertWithoutInspirationsInput
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutInspirationsInput, ArticleUpdateWithoutInspirationsInput>, ArticleUncheckedUpdateWithoutInspirationsInput>
  }

  export type InspirationUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<InspirationCreateWithoutArticlesInput, InspirationUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: InspirationCreateOrConnectWithoutArticlesInput
    upsert?: InspirationUpsertWithoutArticlesInput
    connect?: InspirationWhereUniqueInput
    update?: XOR<XOR<InspirationUpdateToOneWithWhereWithoutArticlesInput, InspirationUpdateWithoutArticlesInput>, InspirationUncheckedUpdateWithoutArticlesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ArticleCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inspirations?: ArticleInspirationCreateNestedManyWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inspirations?: ArticleInspirationUncheckedCreateNestedManyWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutUserInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleCreateManyUserInputEnvelope = {
    data: ArticleCreateManyUserInput | ArticleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InspirationCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    articles?: ArticleInspirationCreateNestedManyWithoutInspirationInput
  }

  export type InspirationUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    articles?: ArticleInspirationUncheckedCreateNestedManyWithoutInspirationInput
  }

  export type InspirationCreateOrConnectWithoutUserInput = {
    where: InspirationWhereUniqueInput
    create: XOR<InspirationCreateWithoutUserInput, InspirationUncheckedCreateWithoutUserInput>
  }

  export type InspirationCreateManyUserInputEnvelope = {
    data: InspirationCreateManyUserInput | InspirationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleCreateWithoutUserInput, ArticleUncheckedCreateWithoutUserInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutUserInput, ArticleUncheckedUpdateWithoutUserInput>
  }

  export type ArticleUpdateManyWithWhereWithoutUserInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    userId?: StringFilter<"Article"> | string
  }

  export type InspirationUpsertWithWhereUniqueWithoutUserInput = {
    where: InspirationWhereUniqueInput
    update: XOR<InspirationUpdateWithoutUserInput, InspirationUncheckedUpdateWithoutUserInput>
    create: XOR<InspirationCreateWithoutUserInput, InspirationUncheckedCreateWithoutUserInput>
  }

  export type InspirationUpdateWithWhereUniqueWithoutUserInput = {
    where: InspirationWhereUniqueInput
    data: XOR<InspirationUpdateWithoutUserInput, InspirationUncheckedUpdateWithoutUserInput>
  }

  export type InspirationUpdateManyWithWhereWithoutUserInput = {
    where: InspirationScalarWhereInput
    data: XOR<InspirationUpdateManyMutationInput, InspirationUncheckedUpdateManyWithoutUserInput>
  }

  export type InspirationScalarWhereInput = {
    AND?: InspirationScalarWhereInput | InspirationScalarWhereInput[]
    OR?: InspirationScalarWhereInput[]
    NOT?: InspirationScalarWhereInput | InspirationScalarWhereInput[]
    id?: StringFilter<"Inspiration"> | string
    content?: StringFilter<"Inspiration"> | string
    createdAt?: DateTimeFilter<"Inspiration"> | Date | string
    userId?: StringFilter<"Inspiration"> | string
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    inspirations?: InspirationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    inspirations?: InspirationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleInspirationCreateWithoutArticleInput = {
    inspiration: InspirationCreateNestedOneWithoutArticlesInput
  }

  export type ArticleInspirationUncheckedCreateWithoutArticleInput = {
    inspirationId: string
  }

  export type ArticleInspirationCreateOrConnectWithoutArticleInput = {
    where: ArticleInspirationWhereUniqueInput
    create: XOR<ArticleInspirationCreateWithoutArticleInput, ArticleInspirationUncheckedCreateWithoutArticleInput>
  }

  export type ArticleInspirationCreateManyArticleInputEnvelope = {
    data: ArticleInspirationCreateManyArticleInput | ArticleInspirationCreateManyArticleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspirations?: InspirationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspirations?: InspirationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleInspirationUpsertWithWhereUniqueWithoutArticleInput = {
    where: ArticleInspirationWhereUniqueInput
    update: XOR<ArticleInspirationUpdateWithoutArticleInput, ArticleInspirationUncheckedUpdateWithoutArticleInput>
    create: XOR<ArticleInspirationCreateWithoutArticleInput, ArticleInspirationUncheckedCreateWithoutArticleInput>
  }

  export type ArticleInspirationUpdateWithWhereUniqueWithoutArticleInput = {
    where: ArticleInspirationWhereUniqueInput
    data: XOR<ArticleInspirationUpdateWithoutArticleInput, ArticleInspirationUncheckedUpdateWithoutArticleInput>
  }

  export type ArticleInspirationUpdateManyWithWhereWithoutArticleInput = {
    where: ArticleInspirationScalarWhereInput
    data: XOR<ArticleInspirationUpdateManyMutationInput, ArticleInspirationUncheckedUpdateManyWithoutArticleInput>
  }

  export type ArticleInspirationScalarWhereInput = {
    AND?: ArticleInspirationScalarWhereInput | ArticleInspirationScalarWhereInput[]
    OR?: ArticleInspirationScalarWhereInput[]
    NOT?: ArticleInspirationScalarWhereInput | ArticleInspirationScalarWhereInput[]
    articleId?: StringFilter<"ArticleInspiration"> | string
    inspirationId?: StringFilter<"ArticleInspiration"> | string
  }

  export type UserCreateWithoutInspirationsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInspirationsInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInspirationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInspirationsInput, UserUncheckedCreateWithoutInspirationsInput>
  }

  export type ArticleInspirationCreateWithoutInspirationInput = {
    article: ArticleCreateNestedOneWithoutInspirationsInput
  }

  export type ArticleInspirationUncheckedCreateWithoutInspirationInput = {
    articleId: string
  }

  export type ArticleInspirationCreateOrConnectWithoutInspirationInput = {
    where: ArticleInspirationWhereUniqueInput
    create: XOR<ArticleInspirationCreateWithoutInspirationInput, ArticleInspirationUncheckedCreateWithoutInspirationInput>
  }

  export type ArticleInspirationCreateManyInspirationInputEnvelope = {
    data: ArticleInspirationCreateManyInspirationInput | ArticleInspirationCreateManyInspirationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInspirationsInput = {
    update: XOR<UserUpdateWithoutInspirationsInput, UserUncheckedUpdateWithoutInspirationsInput>
    create: XOR<UserCreateWithoutInspirationsInput, UserUncheckedCreateWithoutInspirationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInspirationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInspirationsInput, UserUncheckedUpdateWithoutInspirationsInput>
  }

  export type UserUpdateWithoutInspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticleInspirationUpsertWithWhereUniqueWithoutInspirationInput = {
    where: ArticleInspirationWhereUniqueInput
    update: XOR<ArticleInspirationUpdateWithoutInspirationInput, ArticleInspirationUncheckedUpdateWithoutInspirationInput>
    create: XOR<ArticleInspirationCreateWithoutInspirationInput, ArticleInspirationUncheckedCreateWithoutInspirationInput>
  }

  export type ArticleInspirationUpdateWithWhereUniqueWithoutInspirationInput = {
    where: ArticleInspirationWhereUniqueInput
    data: XOR<ArticleInspirationUpdateWithoutInspirationInput, ArticleInspirationUncheckedUpdateWithoutInspirationInput>
  }

  export type ArticleInspirationUpdateManyWithWhereWithoutInspirationInput = {
    where: ArticleInspirationScalarWhereInput
    data: XOR<ArticleInspirationUpdateManyMutationInput, ArticleInspirationUncheckedUpdateManyWithoutInspirationInput>
  }

  export type ArticleCreateWithoutInspirationsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutInspirationsInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ArticleCreateOrConnectWithoutInspirationsInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutInspirationsInput, ArticleUncheckedCreateWithoutInspirationsInput>
  }

  export type InspirationCreateWithoutArticlesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInspirationsInput
  }

  export type InspirationUncheckedCreateWithoutArticlesInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type InspirationCreateOrConnectWithoutArticlesInput = {
    where: InspirationWhereUniqueInput
    create: XOR<InspirationCreateWithoutArticlesInput, InspirationUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleUpsertWithoutInspirationsInput = {
    update: XOR<ArticleUpdateWithoutInspirationsInput, ArticleUncheckedUpdateWithoutInspirationsInput>
    create: XOR<ArticleCreateWithoutInspirationsInput, ArticleUncheckedCreateWithoutInspirationsInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutInspirationsInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutInspirationsInput, ArticleUncheckedUpdateWithoutInspirationsInput>
  }

  export type ArticleUpdateWithoutInspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutInspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InspirationUpsertWithoutArticlesInput = {
    update: XOR<InspirationUpdateWithoutArticlesInput, InspirationUncheckedUpdateWithoutArticlesInput>
    create: XOR<InspirationCreateWithoutArticlesInput, InspirationUncheckedCreateWithoutArticlesInput>
    where?: InspirationWhereInput
  }

  export type InspirationUpdateToOneWithWhereWithoutArticlesInput = {
    where?: InspirationWhereInput
    data: XOR<InspirationUpdateWithoutArticlesInput, InspirationUncheckedUpdateWithoutArticlesInput>
  }

  export type InspirationUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInspirationsNestedInput
  }

  export type InspirationUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleCreateManyUserInput = {
    id?: string
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InspirationCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
  }

  export type ArticleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspirations?: ArticleInspirationUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inspirations?: ArticleInspirationUncheckedUpdateManyWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InspirationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleInspirationUpdateManyWithoutInspirationNestedInput
  }

  export type InspirationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleInspirationUncheckedUpdateManyWithoutInspirationNestedInput
  }

  export type InspirationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleInspirationCreateManyArticleInput = {
    inspirationId: string
  }

  export type ArticleInspirationUpdateWithoutArticleInput = {
    inspiration?: InspirationUpdateOneRequiredWithoutArticlesNestedInput
  }

  export type ArticleInspirationUncheckedUpdateWithoutArticleInput = {
    inspirationId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleInspirationUncheckedUpdateManyWithoutArticleInput = {
    inspirationId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleInspirationCreateManyInspirationInput = {
    articleId: string
  }

  export type ArticleInspirationUpdateWithoutInspirationInput = {
    article?: ArticleUpdateOneRequiredWithoutInspirationsNestedInput
  }

  export type ArticleInspirationUncheckedUpdateWithoutInspirationInput = {
    articleId?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleInspirationUncheckedUpdateManyWithoutInspirationInput = {
    articleId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}