/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {BaseSASVerificationStage} from "./BaseSASVerificationStage";
import {VerificationEventType} from "../channel/types";

export class SendDoneStage extends BaseSASVerificationStage {
    async completeStage() {
        await this.log.wrap("SendDoneStage.completeStage", async (log) => {
            await this.channel.send(VerificationEventType.Done, {}, log);
            await this.channel.waitForEvent(VerificationEventType.Done);
            this.eventEmitter.emit("VerificationCompleted", this.otherUserDeviceId);
        });
    }
}
