/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.20.3
// source: wifi_service.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./wifi_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.WifiServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.WifiServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.WifiCredentials,
 *   !proto.Confirmation>}
 */
const methodDescriptor_WifiService_SendCredentials = new grpc.web.MethodDescriptor(
  '/WifiService/SendCredentials',
  grpc.web.MethodType.UNARY,
  proto.WifiCredentials,
  proto.Confirmation,
  /**
   * @param {!proto.WifiCredentials} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Confirmation.deserializeBinary
);


/**
 * @param {!proto.WifiCredentials} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.Confirmation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Confirmation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.WifiServiceClient.prototype.sendCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/WifiService/SendCredentials',
      request,
      metadata || {},
      methodDescriptor_WifiService_SendCredentials,
      callback);
};


/**
 * @param {!proto.WifiCredentials} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Confirmation>}
 *     Promise that resolves to the response
 */
proto.WifiServicePromiseClient.prototype.sendCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/WifiService/SendCredentials',
      request,
      metadata || {},
      methodDescriptor_WifiService_SendCredentials);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Request,
 *   !proto.WifiCredentials>}
 */
const methodDescriptor_WifiService_GetCredentials = new grpc.web.MethodDescriptor(
  '/WifiService/GetCredentials',
  grpc.web.MethodType.UNARY,
  proto.Request,
  proto.WifiCredentials,
  /**
   * @param {!proto.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.WifiCredentials.deserializeBinary
);


/**
 * @param {!proto.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.WifiCredentials)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.WifiCredentials>|undefined}
 *     The XHR Node Readable Stream
 */
proto.WifiServiceClient.prototype.getCredentials =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/WifiService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_WifiService_GetCredentials,
      callback);
};


/**
 * @param {!proto.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.WifiCredentials>}
 *     Promise that resolves to the response
 */
proto.WifiServicePromiseClient.prototype.getCredentials =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/WifiService/GetCredentials',
      request,
      metadata || {},
      methodDescriptor_WifiService_GetCredentials);
};


module.exports = proto;

