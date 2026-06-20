export async function processRefundTransaction(transactionId: string): Promise<void> {
  // Simulate an async operation before failing
  await new Promise((resolve) => setTimeout(resolve, 50));

  // The error is thrown here in the service layer, resulting in a deeper stack trace
  throw new Error(
    "ConnectionTimeoutError: Failed to connect to legacy refund gateway at 10.4.2.14:5432 for transaction " +
      transactionId
  );
}
