use hdk::prelude::*;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum Error {
    #[error("Element with invalid header")]
    WrongHeader,

    #[error("Element missing its Entry")]
    EntryMissing,

    #[error("Only one of this entry type should exist and an existing one was found")]
    OnlyOneOfEntryType,

    #[error("Parent and Child entries are not different")]
    IdenticalParentChild,

    #[error("Updates can only be to name and image for ProjectMeta entries")]
    OnlyEditNameAndImage,

    #[error("Should not try to modify the original author of this entry")]
    TamperCreateAgentPubKeyReference,

    #[error("Should only use your own AgentPubKey to claim you created this entry")]
    CorruptCreateAgentPubKeyReference,

    #[error("user_edit_hash is Some but should be None during create")]
    SomeNotNoneDuringCreate,

    #[error("user_edit_hash is None but should be Some during edit")]
    NoneNotSomeDuringEdit,

    #[error("Should only use your own AgentPubKey to claim you edited this entry")]
    CorruptEditAgentPubKeyReference,

    #[error("Only the original entry author can update this entry")]
    UpdateOnNonAuthoredOriginal,
    
    #[error("Updates not allowed for this entry type")]
    UpdateAttempted,
    
    #[error("Deletes not allowed for this entry type")]
    DeleteAttempted,

    #[error("Deserialization Failed")]
    DeserializationFailed,

    #[error("Wasm Error {0}")]
    Wasm(WasmError),
}

impl From<Error> for ValidateCallbackResult {
    fn from(e: Error) -> Self {
        ValidateCallbackResult::Invalid(e.to_string())
    }
}

impl From<Error> for ExternResult<ValidateCallbackResult> {
    fn from(e: Error) -> Self {
        Ok(e.into())
    }
}