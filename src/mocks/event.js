export function createEvent(type, id = null, sender = null) {
   return { type, event_id: id, sender };
}

export function withContent(content, event) {
   return Object.assign({}, event, { content });
}

export function withSender(sender, event) {
   return Object.assign({}, event, { sender });
}

export function withTextBody(body, event) {
   return withContent({ body, msgtype: "m.text" }, event);
}

export function withTxnId(txnId, event) {
   return Object.assign({}, event, { unsigned: { transaction_id: txnId } });
}

export function withRedacts(redacts, reason, event) {
   return Object.assign({ redacts, content: { reason } }, event);
}

export function withReply(replyToId, event) {
   return withContent(
      {
         "m.relates_to": {
            "m.in_reply_to": {
               event_id: replyToId,
            },
         },
      },
      event
   );
}
